import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { GeoJson, FeatureCollection } from '../explore/map';
import { Observable } from 'rxjs';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  map: any;
  source: any;
  directions: any;
  markers: Observable<any[]>;
  lat = 36.84;
  lng = -76.28;

  test = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12 , 13 , 14, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12 , 13 , 14];

  ngOnInit() {

    this.markers = this.db.list('features').valueChanges();

    mapboxgl.accessToken = environment.mapbox.accessToken
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/coltstreet/cjqgycyb3c3ts2smxlijg30e0',
      center: [-76.28, 36.84],
      zoom: 11
    });

    // Add zoom and rotation controls to the map.
    this.map.addControl(new mapboxgl.NavigationControl(), "top-left");
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    let svc = this;
    this.map.on('load', function () {
      /// register source
      svc.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      /// get source
      svc.source = svc.map.getSource('firebase')

      /// subscribe to realtime database and set data source
      svc.markers.subscribe(markers => {
        let data = new FeatureCollection(markers)
        svc.source.setData(data)
      })

      svc.map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": "firebase",
        "layout": {
          "icon-image": "{icon}-15",
          "icon-allow-overlap": true
        }
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      svc.map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(svc.map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      svc.map.on('mouseenter', 'places', function () {
        svc.map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      svc.map.on('mouseleave', 'places', function () {
        svc.map.getCanvas().style.cursor = '';
      });
    });

  }

}

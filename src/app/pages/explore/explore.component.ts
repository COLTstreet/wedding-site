import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { GeoJson, FeatureCollection } from '../explore/map';
import { Observable, from } from 'rxjs';

import * as mapboxgl from 'mapbox-gl';

declare var $: any;
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
  filterBy: any;
  markerData: any;
  lat = 36.84;
  lng = -76.28;

  test = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12 , 13 , 14, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12 , 13 , 14];

  ngOnInit() {

    this.markers = this.db.list('features').valueChanges();

    this.db.list('features').valueChanges().subscribe(res => {
      this.markerData = res;
    });

    mapboxgl.accessToken = environment.mapbox.accessToken
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/coltstreet/cjqgycyb3c3ts2smxlijg30e0',
      center: [-81.313741, 29.890716],
      zoom: 13
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
        let coordinates = e.features[0].geometry.coordinates.slice();
        let description = e.features[0].properties.description;
        let id = "#" + e.features[0].properties.id;

        $('.location-content').animate({
          scrollTop: ($(id).offset().top - 85)
         }, 500);

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

  flyTo(value) {
    this.map.flyTo({
      center: [
        value.geometry.coordinates[0],
        value.geometry.coordinates[1]
      ],
      zoom: 18,
    });
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      window.scrollTo(0, 0);
    }
  }

  filter(val) {
    this.filterBy = val;
    
    $("#all-bk").removeClass("selected");
    $("#museum-bk").removeClass("selected");
    $("#bar-bk").removeClass("selected");
    $("#lodging-bk").removeClass("selected");
    $("#veterinary-bk").removeClass("selected");
    $("#beach-bk").removeClass("selected");

    $("#" + val + "-bk").addClass("selected");
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markerFilter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], value: string): any[] {
    if (!values) {
      return [];
    }
    if (typeof value != 'string' || value === 'all') {
      return values;
    }
    return values.filter(item => item.properties.icon === value);
  }
}

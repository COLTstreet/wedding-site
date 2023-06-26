import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#nanogallery").nanogallery2({
      kind:             'flickr',
      userID:           '182012541@N03',
      photoset:         'none',
      thumbnailWidth:   200,
      thumbnailHeight:  "auto",
      thumbnailGutterWidth:      0,
      thumbnailGutterHeight:     0,
      thumbnailBorderHorizontal: 5,
      thumbnailBorderVertical:   5,
      galleryMaxRows:            1,
      galleryDisplayMode:        "pagination", 
      thumbnailLabel:            { "display" : false }
    });
  }

}

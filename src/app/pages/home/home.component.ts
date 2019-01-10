import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  paused = false;
  fullscreen = false;

  ngOnInit() {
    let video = $('#full-video');
    let scope = this;
    video.on('play', function () {
      scope.paused = false;
    });
    video.on('pause', function () {
      scope.paused = true;
    });
  }

  goFullscreen() {
    let video = $('#full-video');
    if(this.fullscreen){
      this.fullscreen = false;
      video.removeAttr('controls');
      $("#full-video").addClass("behind");
    } else {
      this.fullscreen = true;
      $("#full-video").removeClass("behind");
      video.attr('controls', '');
    }
  }

  pausePlay() {
    let video = $('#full-video');
    if (video[0].paused) {
      video[0].play();
      this.paused = false;
    } else {
      video[0].pause();
      this.paused = true;
    }
  }

}

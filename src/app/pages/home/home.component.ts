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

    this.countdownInit();

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

  countdownInit() {
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 11, 2020 18:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $("#days").text(days);
      $("#hours").text(hours);
      $("#mins").text(minutes);
      $("#secs").text(seconds);

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  goToWelcome() {
    $('html,body').animate({scrollTop: $('#welcomeSection').offset().top});
  }

  goToGallery() {
    $('html,body').animate({scrollTop: $('#gallerySection').offset().top});
  }

  goFullscreen() {
    let video = $('#full-video');
    if(this.fullscreen){
      this.fullscreen = false;
      video.removeAttr('controls');
      $("#full-video").addClass("behind");
      $('#gallerySection').show();
    } else {
      this.fullscreen = true;
      $("#full-video").removeClass("behind");
      video.attr('controls', '');
      $('#gallerySection').hide();
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

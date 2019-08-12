import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  timelineSwiper: Swiper;

  ngOnInit() {
    this.timelineSwiper = new Swiper('.timeline .swiper-container', {
      direction: 'vertical',
      loop: false,
      speed: 800,
      pagination: '.swiper-pagination',
      paginationBulletRender: function (swiper, index, className) {
        var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '</span>';
      },
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      breakpoints: {
        768: {
          direction: 'horizontal',
        }
      }
    });
  }

}

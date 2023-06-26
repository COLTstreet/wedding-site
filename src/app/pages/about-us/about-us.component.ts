import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   observer: true,
//   direction: 'horizontal',
//   threshold: 50,
//   spaceBetween: 5,
//   slidesPerView: 1,
//   centeredSlides: true
// };

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  timelineSwiper!: Swiper;

  ngOnInit() {
    this.timelineSwiper = new Swiper('.timeline .swiper-container', {
      modules: [Navigation, Pagination],
      observer: true,
      threshold: 50,
      spaceBetween: 5,
      slidesPerView: 1,
      centeredSlides: true,
      direction: 'vertical',
      loop: false,
      speed: 800,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
            return '<span class="' + className + '">' + year + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          direction: 'horizontal',
        }
      }
    });
  }

}

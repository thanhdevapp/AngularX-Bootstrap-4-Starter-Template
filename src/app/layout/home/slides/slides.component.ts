import { OwlCarousel } from 'ngx-owl-carousel';
import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: [ './slides.component.scss' ]
})
export class SlidesComponent implements OnInit, AfterViewInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  init = true;
  carouselOptions: any = {
    items: 5,
    dots: true,
    navigation: true,
    loop: true,
    center: true,
    autoplay: false,
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    touchDrag: true,
    mouseDrag: true,
    // onChanged: this.checkInStock,
    // onChange: this.animateSlide,
    onInitialized: function () {
      setTimeout(function () {
        $('video').each(function () {
          $(this)[ 0 ].play();
        });
      }, 2000);
    },
    lazyLoad: true,
  };

  slideOption: any = {
    separation: 245,
    sizeMultiplier: 0.84,
    opacityMultiplier: 1,
    separationMultiplier: 0.92,
    startingItem: 3
  };

  slideOptionMobile: any = {
    separation: 220,
    sizeMultiplier: 0.84,
    opacityMultiplier: 1,
    separationMultiplier: 0.92,
    startingItem: 3
  };

  carousel = null;

  images: any[] = [
    {
      source: '/assets/images/1440px_1/components/screen1.jpg'
    },
    {
      source: '/assets/images/1440px_1/components/screen2.jpg'
    },
    {
      source: '/assets/images/1440px_1/components/screen3.jpg'
    },
    {
      source: '/assets/images/1440px_1/components/screen4.jpg'
    },
    {
      source: '/assets/images/1440px_1/components/screen5.jpg'
    }
  ];

  constructor() {
    this.init = true;
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    const out = this;

    // init slide
    this.callBackInitSlide();


    // callback when window resize
    let doit;
    function resizedw() {
      // out.reloadSlide();
    }
    window.onresize = function () {
      clearTimeout(doit);
      doit = setTimeout(function () {
        resizedw();
      }, 150);
    };
  }

  callBackInitSlide() {
    console.log('ok');

    if (this.init) {
      // responsive
      if (window.innerWidth < 768) {
        this.carousel = $('#carousel').waterwheelCarousel(this.slideOptionMobile);
      } else {
        this.carousel = $('#carousel').waterwheelCarousel(this.slideOption);
      }
    }
    this.init = false;
  }

  reloadSlide() {
    const out = this;
    // responsive
    if (window.innerWidth < 768) {
      out.carousel.reload(this.slideOptionMobile);
    } else {
      out.carousel.reload(this.slideOption);
    }
  }

  backSlide() {
    const out = this;
    out.carousel.prev();
  }
  nextSlide() {
    const out = this;
    out.carousel.next();
  }
}

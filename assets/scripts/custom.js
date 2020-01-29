"use strict";

tns({
    container: '.my-slider',
    items: 4,
    controls: false,
    controlsPosition: 'bottom',
    controlsText: ['kaire','desne'],
    nav: false,
    autostopButton: false,
    navPosition: 'bottom',
    autoplay: true,
    mouseDrag:true,
       responsive: {
      1000: {
        items: 4
      },
      900: {    
        items: 4
      },
      800: {    
        items: 3
      },
      700: {
        items: 3
      },
      590: {
        items: 2
      },
      200: {
        items: 2
      }
    }
});
    
//---------ALL SETTINGS FOR TINY SLIDER----------

//   container: '.slider',
//   mode: 'carousel', // or 'gallery'
//   axis: 'horizontal', // or 'vertical'
//   items: 1,
//   gutter: 0,
//   edgePadding: 0,
//   fixedWidth: false,
//   slideBy: 1,
//   controls: true,
//   controlsText: ['prev', 'next'],
//   controlsContainer: false,
//   nav: true,
//   navContainer: false,
//   navAsThumbnails: false,
//   arrowKeys: false,
//   speed: 300,
//   autoplay: false,
//   autoplayTimeout: 5000,
//   autoplayDirection: 'forward',
//   autoplayText: ['start', 'stop'],
//   autoplayHoverPause: false,
//   autoplayButton: false,
//   autoplayButtonOutput: true,
//   autoplayResetOnVisibility: true,
//   loop: true,
//   rewind: false,
//   autoHeight: false,
//   responsive: false,
//   lazyload: false,
//   touch: true,
//   mouseDrag: false,
//   swipeAngle: 15,
//   nested: false,
//   freezable: true,
//   onInit: false
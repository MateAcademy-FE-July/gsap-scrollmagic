//animation

var controller = new ScrollMagic.Controller();

let animateNews = new TimelineMax();

animateNews.to(".u-gallery__l", 0.7, {y: -40}, 0)
           .to(".u-gallery__r", 0.7, {y: 40}, 0)
           .to(".u-gallery__back", 0.4, {scale: 1.2, transformOrign:'50% 100%'}, 0);


new ScrollMagic.Scene({triggerElement: ".u-gallery", duration: 150, triggerHook: 'onEnter', offset: 30})
  .setTween(animateNews)
  .addIndicators()
  .addTo(controller);


//lazy 

var bLazy = new Blazy({
  // Options
});
var controller = new ScrollMagic.Controller();
    
    $('.fade-in').each(function(){
    
    var tween = TweenMax.from($(this), 0.7, {autoAlpha: 0, y: '+=10', ease:Linear.easeNone});
    
    var scene = new ScrollMagic.Scene({
        triggerElement: this
       
    })
      .setTween(tween)
     .addTo(controller);
      
    });

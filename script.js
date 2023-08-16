$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var parallaxScene = new ScrollMagic.Scene({
        triggerElement: '.parallax-header', // Trigger the animation when this element is in view
        triggerHook: 1, // Trigger the animation at the bottom of the trigger element
        duration: '300%' 
    })
    .addTo(controller)
    .on('progress', function(e) {
        var scaleValue = 1 + (e.progress);
        $('.background-layer').css('transform', 'translateZ(-1px) scale(' + scaleValue + ')');
    });
});


$(document).ready(function() {
    var observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                $(entry.target).delay(200 * entry.target.dataset.index).animate({ opacity: 1 }, 500); // Fade in with delay
            } else {
                $(entry.target).animate({ opacity: 0 }, 500); 
            }
        });
    }, observerOptions);

    $(".col img").each(function(index, image) {
        $(image).css("opacity", 0); 
        $(image).attr("data-index", index); 
        observer.observe(image);
    });
});

$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 400) {
            $(".navbar").addClass("changed").removeClass("default");
        } else {
            $(".navbar").addClass("default").removeClass("changed");
        }
    });
});

$(document).ready(function(){

    var myText = "This is a short paragraph with a typewriting effect to show the use of ScrollMagic. Enjoy the following grid of cat pictures!";
    let myTextLength = myText.length;
    
    function typing( displayedLength ) {
      if( displayedLength <= myTextLength ) {
        $( "#text" ).text( myText.substring( 0, displayedLength ) );
        }
      }
    
    var controller = new ScrollMagic.Controller();  
    var typewritingOnScroll = new TimelineMax();
    var typewritingScene = new ScrollMagic.Scene({ triggerElement: "#text", duration: 300 })
        .on('progress',  function () {
          let scrollProgress = Math.ceil( typewritingScene.progress() * myTextLength );
          typing( scrollProgress );
        })
     .setPin('#text')
     .setTween(typewritingOnScroll)
     .addTo( controller );
})

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var scaleScene = new ScrollMagic.Scene({
        triggerElement: '.scroll-section',
        triggerHook: 0.5, // Trigger at the middle of the section
        duration: '100%' // Scene duration matches the section's height
    })
    .addTo(controller)
    .on('progress', function(e) {
        var scaleValue = 1 + (e.progress - 0.5); 
        $('.scaling-element').css('transform', 'scale(' + scaleValue + ')');
    });
});

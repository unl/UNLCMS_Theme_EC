WDN.loadJQuery(function () {  
    var $ = WDN.jQuery,
      hash = window.location.hash,
      shift = 0,
    	options = {
          cycle: false,
    		  hashTags: true,
        	nextButton: true,
        	prevButton: true,
        	pagination: true,
        	animateStartingFrameIn: true,
        	autoPlay: false,
        	preloader: true,
        	preloadTheseFrames: [1]
    	},
      sequence;
		
	  // Do we need the splash page?
    if (hash == "") {
  		// Fade in Splash intro
  		$('#intro').delay(200).fadeIn('slow');
  				
  		// Click button to start Sequence.js
  		$('#start').click( function() {
  			$('#intro').fadeOut('slow', function() {
  				$('#compass-nav').fadeIn('slow');
  				$('.sequence-next').fadeIn('slow');
          window.location.hash = 'frame-1';
  			});
  			
  			sequence = $("#sequence").sequence(options).data("sequence");
  		});
	  } else {
		  $('#compass-nav').delay(750).fadeIn('slow');
		  sequence = $("#sequence").sequence(options).data("sequence");
    }

    // Key press listener
    $(document).keydown( function(e) {
      frameChange(e);
      return false;
    });
    
    //Compass-nav functionality
    $(".milestone").click( function() {
      // Acquire key code
      var marker = parseInt($(this).html()) + 48;
      frameChange(marker);
    });

    // NEXT BUTTON
	  $('.sequence-next').click( function() {
		  frameChange(39);
    });

	  // PREV ARROW
    $('.sequence-prev').click( function() {
      frameChange(37);
    });

    // Frame change functionality
    function frameChange(e) {
      var keyCode,
          key = {left: 37, right: 39, one: 49, two: 50, three: 51, four: 52, five: 53 },
          currentFrame = $('.sequence-pagination > li.current > .milestone').html(),
          frameId = $('.animate-in').attr("id");

      // Find out if e = keyCode or event
      if (isNaN(e)) {
        keyCode = e.keyCode || e.which;
      } else {
        keyCode = e;
      }

    	switch (keyCode) {
    		case key.left:
          if (frameId !== 'frame-1') {
      			shift = -45 * (currentFrame - 2); 
       			if (shift == -180) {
       				$('.sequence-next').fadeOut(300);
       			} else if (shift == 0) {
       				$('.sequence-prev').fadeOut(300);
       			} else {
       				$('.sequence-next, .sequence-prev').fadeIn(300).animate({'opacity': '1'});
       			}
       			if (shift == 45) { shift = -180; }
       			$("#bar, #needle").css({
        			'-webkit-transform': 'rotate(' + shift + 'deg)',
        			'-moz-transform': 'rotate(' + shift + 'deg)',
        			'-ms-transform': 'rotate(' + shift + 'deg)',
        			'-o-transform': 'rotate(' + shift + 'deg)',
        			'transform': 'rotate(' + shift + 'deg)'
      			});
          }
    		break;
    		case key.right:
          if (frameId !== 'frame-5') {
      			shift = -45 * currentFrame;
       			if (shift == -180) {
       				$('.sequence-next').fadeOut(300);
       			} else if (shift == 0) {
       				$('.sequence-prev').fadeOut(300);
       			} else {
       				$('.sequence-next, .sequence-prev').fadeIn(300).animate({'opacity': '1'});
       			}
       			if (shift == -225) { shift = 0; }
       			$("#bar, #needle").css({
        			'-webkit-transform': 'rotate(' + shift + 'deg)',
        			'-moz-transform': 'rotate(' + shift + 'deg)',
        			'-ms-transform': 'rotate(' + shift + 'deg)',
        			'-o-transform': 'rotate(' + shift + 'deg)',
        			'transform': 'rotate(' + shift + 'deg)'
      			});
          }
    		break;
    		case key.one:
      			$("#bar, #needle").css({
        			'-webkit-transform': 'rotate(0deg)',
        			'-moz-transform': 'rotate(0deg)',
        			'-ms-transform': 'rotate(0deg)',
        			'-o-transform': 'rotate(0deg)',
        			'transform': 'rotate(0deg)'
      			});
      			$('.sequence-prev').fadeOut(300);
      			$('.sequence-next').fadeIn(300).animate({'opacity': '1'});
    		break;
    		case key.two:
      			$("#bar, #needle").css({
        			'-webkit-transform': 'rotate(-45deg)',
        			'-moz-transform': 'rotate(-45deg)',
        			'-ms-transform': 'rotate(-45deg)',
        			'-o-transform': 'rotate(-45deg)',
        			'transform': 'rotate(-45deg)'
      			});
      			$('.sequence-next, .sequence-prev').fadeIn(300).animate({'opacity': '1'});
    		break;
    		case key.three:
      			$("#bar, #needle").css({
        			'-webkit-transform': 'rotate(-90deg)',
        			'-moz-transform': 'rotate(-90deg)',
        			'-ms-transform': 'rotate(-90deg)',
        			'-o-transform': 'rotate(-90deg)',
        			'transform': 'rotate(-90deg)'
      			});
      			$('.sequence-next, .sequence-prev').fadeIn(300).animate({'opacity': '1'});
    		break;
    		case key.four:
      			$("#bar, #needle").css({
        			'-webkit-transform': 'rotate(-135deg)',
        			'-moz-transform': 'rotate(-135deg)',
        			'-ms-transform': 'rotate(-135deg)',
        			'-o-transform': 'rotate(-135deg)',
        			'transform': 'rotate(-135deg)'
      			});
      			$('.sequence-next, .sequence-prev').fadeIn(300).animate({'opacity': '1'});
    		break;
    		case key.five:
      			$("#bar, #needle").css({
        			'-webkit-transform': 'rotate(-180deg)',
        			'-moz-transform': 'rotate(-180deg)',
        			'-ms-transform': 'rotate(-180deg)',
        			'-o-transform': 'rotate(-180deg)',
        			'transform': 'rotate(-180deg)'
      			});
      			$('.sequence-next').fadeOut(300);
      			$('.sequence-prev').fadeIn(300).animate({'opacity': '1'});
    		break;
  		}

      // Refresh tabbed content
      if ("onhashchange" in window) {
        $('.ec-region-list>li').hide();
        $('.ec-region-list>:first-child').show();
      }
	}

    /* 'Fake' modal window functionality */
    $('span.fake-modal').click( function() {	
    	var tabKey = $(this).data('tab');

      $('.ec-region-article').fadeOut(300, function() {
          $(tabKey).hide().delay(100).fadeIn(300);
      });
        
      // Add styles for selected
      $('.fake-modal').removeClass('now-selected');
      $(this).addClass('now-selected');
        
    });
   
});
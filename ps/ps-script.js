WDN.loadJQuery(function () {  
  var $ = WDN.jQuery;
  WDN.loadJS('sites/all/themes/UNLCMS_Theme_EC/ps/jquery.ba-hashchange.min.js', function(){
    WDN.loadJS('sites/all/themes/UNLCMS_Theme_EC/ps/jquery.sequence-min.js', function() {
      // Trim and inject h2 for mobile
      $('.fake-modal').each( function(i) {
        var tabTitle = $.trim($(this).text()),
            tabContent = $(this).data('tab');
  
            // Log the h2's
        $(tabContent).prepend('<h2 class="tab-title">' + tabTitle + '</h2>')
        WDN.log('Tab title is: ' + tabTitle);
      });

     execute(); 
    });
  });  

function execute() {
  var onlyOnce = true,
  shift 
  hashSwitch = false,
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
  if (window.location.hash == "") {
		// Fade in Splash intro
		$('#intro').hide().delay(200).stop(true, false).fadeIn('slow');
  				
		// Click button to start Sequence.js
		$('#start').click( function() {
			$('#intro').stop(true, false).fadeOut('slow', function() {
				$('#compass-nav').stop(true, false).fadeIn('slow');
				$('.sequence-next').stop(true, false).fadeIn('slow');
        window.location.hash = 'frame-1';
			});
  			
			sequence = $("#sequence").sequence(options).data("sequence");
		});
  } else {

    // Put bar in correct position
    var frameNum = parseInt(window.location.hash.replace(/#frame-/gi, ''));
    var marker = frameNum + 48;
	  $('#compass-nav').stop().delay(750).stop(true, false).fadeIn('slow');
	  sequence = $("#sequence").sequence(options).data("sequence");
    frameChange(marker);
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
     				$('.sequence-next').stop(true, false).fadeOut(300);
     			} else if (shift == 0) {
     				$('.sequence-prev').fadeOut(300);
     			} else {
     				$('.sequence-next, .sequence-prev').stop(true, false).fadeIn(300).animate({'opacity': '1'});
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
     				$('.sequence-next').stop(true, false).fadeOut(300);
     			} else if (shift == 0) {
     				$('.sequence-prev').stop(true, false).fadeOut(300);
     			} else {
     				$('.sequence-next, .sequence-prev').stop(true, false).fadeIn(300).animate({'opacity': '1'});
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
    			$('.sequence-prev').stop(true, false).fadeOut(300);
    			$('.sequence-next').stop(true, false).fadeIn(300).animate({'opacity': '1'});
  		break;
  		case key.two:
    			$("#bar, #needle").css({
      			'-webkit-transform': 'rotate(-45deg)',
      			'-moz-transform': 'rotate(-45deg)',
      			'-ms-transform': 'rotate(-45deg)',
      			'-o-transform': 'rotate(-45deg)',
      			'transform': 'rotate(-45deg)'
    			});
    			$('.sequence-next, .sequence-prev').stop(true, false).fadeIn(300).animate({'opacity': '1'});
  		break;
  		case key.three:
    			$("#bar, #needle").css({
      			'-webkit-transform': 'rotate(-90deg)',
      			'-moz-transform': 'rotate(-90deg)',
      			'-ms-transform': 'rotate(-90deg)',
      			'-o-transform': 'rotate(-90deg)',
      			'transform': 'rotate(-90deg)'
    			});
    			$('.sequence-next, .sequence-prev').stop(true, false).fadeIn(300).animate({'opacity': '1'});
  		break;
  		case key.four:
    			$("#bar, #needle").css({
      			'-webkit-transform': 'rotate(-135deg)',
      			'-moz-transform': 'rotate(-135deg)',
      			'-ms-transform': 'rotate(-135deg)',
      			'-o-transform': 'rotate(-135deg)',
      			'transform': 'rotate(-135deg)'
    			});
    			$('.sequence-next, .sequence-prev').stop(true, false).fadeIn(300).animate({'opacity': '1'});
  		break;
  		case key.five:
    			$("#bar, #needle").css({
      			'-webkit-transform': 'rotate(-180deg)',
      			'-moz-transform': 'rotate(-180deg)',
      			'-ms-transform': 'rotate(-180deg)',
      			'-o-transform': 'rotate(-180deg)',
      			'transform': 'rotate(-180deg)'
    			});
    			$('.sequence-next').stop(true, false).fadeOut(300);
    			$('.sequence-prev').stop(true, false).fadeIn(300).animate({'opacity': '1'});
  		break;
		}
	}

  // Refresh tabbed content
  $(window).on('hashchange load', function(e) {
       e.preventDefault();
   
        // Load the content
        $('.ec-region-list > article').not('.animate-in .ec-region-list > .ec-region-article:first').stop(true, false).fadeOut(300);
        $('.animate-in .ec-region-list > .ec-region-article:first').hide().stop(true, false).fadeIn(300);
        $('.fake-modal').removeClass('now-selected');
        $('.animate-in .ec-section-list > li:first .fake-modal').addClass('now-selected');
  });  
  

  /* 'Fake' modal window functionality */
  $('.fake-modal').on('click', function(e) {
  	var nowSel = $(this).data('tab'),
        prevSel = $('.now-selected').data('tab');

    $(prevSel).stop(true, false).fadeOut(300, function() {
      $(nowSel).stop(true, false).fadeIn(300);
    });
        
    // Add styles for selected
    $('.fake-modal.now-selected').removeClass('now-selected');
    $(this).addClass('now-selected');  
  });
}   
});

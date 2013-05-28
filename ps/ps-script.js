WDN.loadJQuery(function () {  
    var $ = WDN.jQuery,
    	mouse_is_inside = false,
    	phase = 0,
        shift = 0,
        marker,
        old_marker,
    	options = {
    		hashTags: true,
        	nextButton: true,
        	prevButton: true,
        	pagination: true,
        	animateStartingFrameIn: true,
        	autoPlay: false,
        	preloader: true,
        	preloadTheseFrames: [1]
    	};
		
	// Do we need the splash page?
	var hash = window.location.hash,
		sequence;
	if (hash == "") {
		// Make Intro screen
		$('#ps-viewport').append('<div id="intro"></div>');
		$('#intro').append('<h1></h1><p class="sub-text"></p><p class="main-text"></p>');
		$('#intro').append('<span id="start">&rarr;</span>');
		
		// Populate the mark-up
		$('#intro > h1').html('Find your Major');
		$('#intro > .sub-text').html('We are excited to work with you on your exciting journey of exploring and deciding upon a major at UNL!&nbsp;&nbsp;Almost 1 of 5 students entering UNL students are still deciding on a major, <u>so you are not alone</u>.');
		$('#intro > .main-text').html('Not every student takes the same path when choosing a major, and your adviser will serve as your guide along the process.  Decisions about majors involve not only exploration of the different majors and careers available, but also require you to examine yourself and determine where your interests, skills, and values lie.  The path ahead outlines a variety of factors that can be explored when selecting a major (and these factors can be further explored on this website), and you should work with your adviser to create an individual action plan for your specific major exploration process.');
		
		// Display Splash intro
		$('#intro').delay(200).fadeIn('slow');
				
		// Click button to start Sequence.js
		$('#start').click( function() {
			$('#intro').fadeOut('slow', function() {
				$('#compass-nav').fadeIn('slow');
				$('.sequence-next').fadeIn('slow');
			});
			
			
			sequence = $("#sequence").sequence(options).data("sequence");
		});
	} else {
		$('#compass-nav').delay(750).fadeIn('slow');
		sequence = $("#sequence").sequence(options).data("sequence");
	}
    
    // Add wide-modal (But hide it!)
    var wideModal = '<div id="wide-modal"><h1>Header</h1><p>That text below the header.</p></div>';
    $('#ps-viewport').append(wideModal);
    
    // NEXT BUTTON
	$('.sequence-next').click( function() {
		marker = ($('.sequence-canvas > li.animate-in').index()) + 2;
        shift = -45 * (marker - 1);
        $("#bar, #needle").css({
        	'-webkit-transform': 'rotate(' + shift + 'deg)',
        	'-moz-transform': 'rotate(' + shift + 'deg)',
        	'-ms-transform': 'rotate(' + shift + 'deg)',
        	'-o-transform': 'rotate(' + shift + 'deg)',
        	'transform': 'rotate(' + shift + 'deg)'
      	});
      
        // For Checkmark Action
        $('.sequence-pagination > li').removeClass('current');
        $('.sequence-pagination > li:nth-of-type('+ (marker) +')').addClass('current');

    	if (marker >= 5) {
        	$(this).fadeOut(300);
    	} else {
        	$(this).fadeIn(300);
    	}

        $('.sequence-prev').fadeIn(300).animate({'opacity': '1'});
        old_marker = marker;
    });

	// PREV ARROW
    $('.sequence-prev').click( function() {
        marker = old_marker - 1;
        shift = -45 * (marker - 1);
        $("#bar, #needle").css({
        	'-webkit-transform': 'rotate(' + shift + 'deg)',
        	'-moz-transform': 'rotate(' + shift + 'deg)',
        	'-ms-transform': 'rotate(' + shift + 'deg)',
        	'-o-transform': 'rotate(' + shift + 'deg)',
        	'transform': 'rotate(' + shift + 'deg)'
    	});
      
       // For Checkmark Action
       $('.sequence-pagination > li').removeClass('current');
       $('.sequence-pagination > li:nth-of-type('+ (marker) +')').addClass('current');
      
        if (marker <= 1) {
            $(this).fadeOut(300);
        } else {
            $(this).fadeIn(300);
        }

        $('.sequence-next').fadeIn(300);
        old_marker = marker;
    });
    
    
    //Compass-nav functionality
    $(".milestone").click(function() {
    	marker = $(this).html();
      	shift = -45 * (marker - 1);

    	if (marker > old_marker) {
    	    sequence.goTo(marker, 1); //navigate forwards
   		} else {
    	    sequence.goTo(marker, -1); //navigate backwards
    	}

    	// Hidden arrows
    	if (marker >= 5) {
        	$('.sequence-next').fadeOut(300);
    	} else {
        	$('.sequence-next').fadeIn(300);
    	}

    	if (marker <= 1) {
        	$('.sequence-prev').fadeOut(300);
    	} else {
        	$('.sequence-prev').fadeIn(300);
    	}
      
    	$('.sequence-pagination > li').removeClass('current');
    	$(this).parent().addClass('current');
    	$("#bar, #needle").css({
        	'-webkit-transform': 'rotate(' + shift + 'deg)',
        	'-moz-transform': 'rotate(' + shift + 'deg)',
        	'-ms-transform': 'rotate(' + shift + 'deg)',
        	'-o-transform': 'rotate(' + shift + 'deg)',
        	'transform': 'rotate(' + shift + 'deg)'
    	});

    	old_marker = marker;
    });
    
    // Key press functionality
    $(document).keydown( function(e) {
    	var keyCode = e.keyCode || e.which,
      		key = {left: 37, right: 39, one: 49, two: 50, three: 51, four: 52, five: 53 },
			currentFrame = $('.sequence-pagination > li.current > .milestone').html();
    	
    	switch (keyCode) {
    		case key.left:
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
    		break;
    		case key.right:
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
	});
    
    //Track mouse position
    $('#wide-modal').hover(function() {
        mouse_is_inside = true;
    }, function() {
        mouse_is_inside = false;
    });
    
    /* Wide modal functionality */
    $('.modal').click( function() {
        $('#wide-modal').slideDown(300, function() {
        
        	$(this).addClass('withShadow');
        	
        	$('body').mouseup(function() {
    			if (!mouse_is_inside) {
            		$('#wide-modal').fadeOut(250).removeClass('withShadow');
        		}
    		});
        });
    });
    
    
});
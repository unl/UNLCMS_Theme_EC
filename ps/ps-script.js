WDN.loadJQuery(function () {  
    var $ = WDN.jQuery,
    	phase = 0,
        shift = 0,
        marker,
        old_marker,
    	options = {
        	nextButton: true,
        	prevButton: true,
        	pagination: true,
        	animateStartingFrameIn: true,
        	autoPlay: false,
        	preloader: true,
        	preloadTheseFrames: [1]
    	},
		sequence = $("#sequence").sequence(options).data("sequence");
    
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
    
    /* Wide modal functionality
    $('.yellow-link').click( function() {
        var wideModal = '<div id="wide-modal"><h1>Header</h1><p>That text below the header.</p></div>';
        $('#ps-viewport').append(wideModal).slideDown(300);
        
        
        $('#wide-modal').click( function() {
            $(this).hide(300, function() {
                $(this).remove();
            })
        });
    });
    */
});
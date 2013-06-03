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
    

    /* 'Fake' modal window functionality */
    $('span.fake-modal').click( function() {	
    	// Important, use for compass, maybe not needed here...?
    	var frameId = $(this).parents('.animate-in').attr("id"),
    	tabWindow = $(this).parents('.side-left').siblings('.main-right'),
    	tabKey = $(this).data('tab'),
    	tabContent,
    	childCount,
    	i = 1,
    	mData = {shadow: 'shadow', career: 'career', review: 'review', course: 'course', gather: 'gather', procons: 'procons', notsure: 'notsure'};
    	
    	// The Injected Content
    	switch (tabKey) {
    		case mData.shadow:
      			tabContent = '<p>Shadowing a Lincoln professional is a great way to experience first-hand what a typical day may look like in a career of interest.  Through a shadowing experience, you also will have the opportunity to ask an expert for inside advice about the career you are exploring.  Let Career Services help you set up a shadowing experience by talking with them about their Guided Professional Shadowing (GPS) program!</p>';
    		break;
    		case mData.career:
    			tabContent = '<p>When considering a career that is the best fit for you, it is important to consider things like the content of the work, work conditions, work environment, pay, etc.  To get you started visit:</p><ul><li><a href="http://www.bls.gov/ooh/">Occupational Outlook Handbook</a></li><li>“Learn About Careers” section of <a href="http://public.careercruising.com/us/en">Career Cruising</a></li></ul>';
    		break;
    		case mData.review:
    			tabContent = '<p>Even though it is not yet time for you to submit job applications, reading through job descriptions can be a helpful way to better understand what day-to-day activities of a job or profession may entail.  UNL students have access to a plethora of job descriptions through <a href="http://www.unl.edu/careers/hhl">Husker Hire Link</a>.</p>';
    		break;
    		case mData.course:
    			tabContent = '<p>Take a one credit hour major “intro” course.  Most of these courses cover not only information about the major, but about careers related to that major.  Many also invite guest speakers to come to share more about their experiences within their career fields.</p>';
    		break;
    		case mData.gather:
    			tabContent = '<p>Decision-making includes a lot of information gathering.  Set achievable goals for finding out more about possible majors.  Examples of achievable goals in your decision making process:</p><ul><li>i. Visit the Career Services center this semester in 230 Nebraska Union to ask about some careers I am interested in.</li><li>Read about majors on the Undergraduate Bulletin</li><li>Meet with a professor or academic adviser in a major I am considering and find out more about the classes required and possible careers I can do with this major.</li><li>Shadow a professional in an area I want to learn more about.</li><li>Get involved in a student organization I care about.  Ask students in the organization about how they decided on their major.</li><li>Visit an academic adviser in the Explore Center to talk about possible majors and further goals in my process of choosing a major.</li><li>Take an exploratory class in a major you are considering.  Visit with an Explore Center adviser for suggestions or find on the website.</li></ul>';
    		break;
        case mData.procons:
          tabContent = '<p>Get out a piece of paper and make a list of the pros/likes and cons/dislikes of majors you are considering.  Examples of likes and dislikes could include working environment, autonomy, salary, your own interest level, skills needed, required courses, and possible careers.  For each major, ask yourself these questions:</p><ul><li>Do the pros outweigh the cons or vice versa?</li><li>Do you notice any patterns with what you put in your pro column and your con column (these are clues to what you value in a career/major)?</li><li>Could any of the cons be turned into pros?  How?</li><li>Are there any majors that had more pros than cons?  Would I be willing to look into those more as possible majors?</li></ul>';
        break;
        case mData.notsure:
          tabContent = '<p>Make sure to click through all the rest of the resources in Find a Major for more help or contact an Explore Center adviser for help.</p>';
        break;
    	}
    
        // Fade in and replace previous content
        childCount = tabWindow.children().length;
        tabWindow.children().fadeOut(300, function() {
        	console.log($(this).val());
        	$(this).remove();
        	if (i == childCount) {
        		$(tabContent).hide().appendTo(tabWindow).fadeIn(300);
        	}
        	i++;
        });
        
        // Add styles for selected
        $('.fake-modal').removeClass('now-selected');
        $(this).addClass('now-selected');
        
    });
    
});
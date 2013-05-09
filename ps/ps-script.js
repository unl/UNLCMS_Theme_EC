WDN.loadJQuery(function () {  
    var $ = WDN.jQuery;

    // Sequence.js
    var options = {
            autoPlay: false
    }
    
    var sequence = $("#sequence").sequence(options).data("sequence"),
          phase = 0,
          shift = 0,
          marker,
          old_marker;
    
    $('.sequence-next').click( function() {
        sequence.next();
        marker = ($('.sequence-canvas > li.animate-in').index()) + 2;

        shift = -45 * (marker - 1);
        $("#bar, #needle").css({
        '-webkit-transform': 'rotate(' + shift + 'deg)',
        '-moz-transform': 'rotate(' + shift + 'deg)',
        '-ms-transform': 'rotate(' + shift + 'deg)',
        '-o-transform': 'rotate(' + shift + 'deg)',
        'transform': 'rotate(' + shift + 'deg)'
      });

    if (marker >= 5) {
        $(this).fadeOut(300);
    } else {
        $(this).fadeIn(300);
    }

        $('.sequence-prev').fadeIn(300);
        old_marker = marker;
    });

    $('.sequence-prev').click( function() {
        sequence.prev();
        marker = old_marker - 1;

        shift = -45 * (marker - 1);
        $("#bar, #needle").css({
        '-webkit-transform': 'rotate(' + shift + 'deg)',
        '-moz-transform': 'rotate(' + shift + 'deg)',
        '-ms-transform': 'rotate(' + shift + 'deg)',
        '-o-transform': 'rotate(' + shift + 'deg)',
        'transform': 'rotate(' + shift + 'deg)'
      });
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
      
    // This will need to be moved
      //$(this).toggleClass('active');

      $("#bar, #needle").css({
        '-webkit-transform': 'rotate(' + shift + 'deg)',
        '-moz-transform': 'rotate(' + shift + 'deg)',
        '-ms-transform': 'rotate(' + shift + 'deg)',
        '-o-transform': 'rotate(' + shift + 'deg)',
        'transform': 'rotate(' + shift + 'deg)'
      });

    old_marker = marker;
    });
    
    // Wide modal functionality
    $('.yellow-link').click( function() {
        var wideModal = '<div id="wide-modal"><h1>Header</h1><p>That text below the header.</p></div>';
        $('#ps-viewport').append(wideModal).slideDown(300);
        
        
        $('#wide-modal').click( function() {
            $(this).hide(300, function() {
                $(this).remove();
            })
        });
    });
    
});
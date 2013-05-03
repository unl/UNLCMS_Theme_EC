<div id="compass-nav">
    <div id="bar"></div>
    <div class="mask"></div>
    <div id="compass">
        <div id="needle"></div>
    </div>
    <a class="milestone" style="left: -8px; top: 105px;">1</a> 
    <a class="milestone" style="left: 25px; bottom: 28px;">2</a> 
    <a class="milestone" style="left: 108px; bottom: -8px;">3</a> 
    <a class="milestone" style="right: 25px; bottom: 28px;">4</a> 
    <a class="milestone" style="right: -8px; top: 105px;">5</a>
</div>
<section id="ps-viewport">
    <section id="ps-wrapper">
        <section id="the-stage">
            <div class="clouds-3"></div>
            <div class="clouds-2"></div>
            <div class="clouds-1"></div>
            <div class="mountains"></div>
            <div class="mountains front"></div>
            <div class="far-hills"></div>
            <div class="far-hills front"></div>
            <div class="close-hills"></div>
            <div class="close-hills front"></div>
            <?php print render($content['field_major_sections']); ?>
        </section>
    </section>
</section>
<a href="#" class="scene-nav back">&lt;</a>
<a href="#" class="scene-nav forward">&gt;</a>
<script>
// Variables
var $ = WDN.jQuery, 
    maxScroll;

$(function () {  
    /* Invert mouseWheel scrolling
    $("#ps-viewport").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
    });
    */
    
    // Disable window scroll
    $('#ps-viewport').hover(function() {
        $('body').css("overflow","hidden");
    }, function() {
         $('body').css("overflow","auto");
    });
    
    // Bind events to viewport
    $("#ps-viewport").on({
        scroll: function() {
            // Grab scroll position    
            var scrolled = $('#ps-viewport').scrollLeft();
            console.log('viewport-scrolled ' + $('#ps-viewport').scrollLeft());
        
            /**
             * Calculate our factor, setting it as the root `font-size`.
             *
             * Our factor is calculated by multiplying the ratio of the page scrolled by our base factor. The higher the base factor, the larger the parallax effect.
             */
            $('html').css({ fontSize: (scrolled / maxScroll) * 50 });
            console.log("fontSize: " + (scrolled / maxScroll) * 50);
        },
        resize: function() {
            // Calculate the maximum scroll position
            maxScroll = $('#ps-wrapper').width() - $('#ps-viewport').width();
        }
    }).trigger('resize');
    
    //Compass-nav functionality
    var phase = 0,
        shift = 0;
    
    $(".milestone").click(function() {
      var marker = $(this).html();
      shift = -45 * (marker - 1);
      
      // Problem
      $(this).toggleClass('active');
      
      $("#bar, #needle").css({
        '-webkit-transform': 'rotate(' + shift + 'deg)',
        '-moz-transform': 'rotate(' + shift + 'deg)',
        '-ms-transform': 'rotate(' + shift + 'deg)',
        '-o-transform': 'rotate(' + shift + 'deg)',
        'transform': 'rotate(' + shift + 'deg)'
      });
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
</script>
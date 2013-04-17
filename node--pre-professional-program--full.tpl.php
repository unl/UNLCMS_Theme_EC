<?php
    // Documentation
    
?>
<div class="wdn-band" id="overview">
    <div class="wdn-inner-wrapper">
        <section class="bp2-wdn-grid-set-halves">
            <div class="wdn-col bump-down">
                <figure>
                    <?php print render($content['field_program_photo']); ?>
                </figure>
            </div>
            <div class="wdn-col">
                <h2 class="ec-heading">
                    <span><?php print $content['field_overview']["#object"]->title; ?></span>
                    <?php print $content['field_overview']["#title"]; ?>
                </h2>
                <?php print render($content['field_overview']); ?>
            </div>
        </section>
    </div>
</div>
<nav class="wdn-band " id="page-navigation">
    <div class="wdn-inner-wrapper">
        <ul id="slider-nav" class="horizontal-list">
            <li>
                <a href="<?php echo(request_path()); ?>#coursework"><?php print $content['field_coursework']["#title"]; ?></a>
            </li>
            <li>
                <a href="<?php echo(request_path()); ?>#application-info"><?php print $content['field_application_information']["#title"]; ?></a>
            </li>
            <li>
                <a href="<?php echo(request_path()); ?>#entrance-exams"><?php print $content['field_entrance_exams']["#title"]; ?></a>
            </li>
            <li>
                <a href="<?php echo(request_path()); ?>#professional-degrees">Professional Degrees</a>
            </li>
            <li>
                <a href="<?php echo(request_path()); ?>#additional-resources"><?php print $content['field_additional_resources']["#title"]; ?></a>
            </li>
        </ul>
    </div>
</nav>
<div class="wdn-band">
    <section class="wdn-inner-wrapper horizontal-separator" id="coursework">
        <h2 class="ec-heading flag">
            <span><?php print $content['field_coursework']["#object"]->title; ?></span>
            <?php print $content['field_coursework']["#title"]; ?>
        </h2>
        <div class="bp2-wdn-grid-set-halves">
            <div class="wdn-col">
                <?php print render($content['field_coursework']); ?>
            </div>
            <div class="wdn-col">
                <div class="center">
                    <?php print render($content['field_program_checklist']); ?>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper horizontal-separator">
        <section id="application-info" class="wdn-grid-set">
            <div class="bp2-wdn-col-one-third">
                Put the PPS here
            </div>
            <div class="bp2-wdn-col-two-thirds">
                <h2 class="ec-heading flag reverse">
                    <span><?php print $content['field_application_information']["#object"]->title; ?></span>
                    <?php print $content['field_application_information']["#title"]; ?>
                </h2>
                <?php print render($content['field_application_information']); ?>
            </div>
        </section>
    </div>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper horizontal-separator" id="entrance-exams" >
        <section class="bp2-wdn-grid-set-halves">
            <div class="wdn-col">
                <h2 class="ec-heading flag">
                    <span><?php print $content['field_entrance_exams']["#object"]->title; ?></span>
                    <?php print $content['field_entrance_exams']["#title"]; ?>
                </h2>
                <?php print render($content['field_entrance_exams']); ?>
            </div>
            <div class="wdn-col">
                <div class="student-story">
                    <?php print views_embed_view('random_student_story','block', $node->nid); ?>
                </div>
            </div>
        </section>
    </div>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper horizontal-separator" id="professional-degrees">
        <section class="wdn-grid-set">
            <div class="wdn-col-full">
                <h2 class="ec-heading">
                    <span><?php print $content['field_professional_degrees_intro']["#object"]->title; ?></span>
                    Professional Degrees <?php // The field name is different, so just hard code for now ?>
                </h2>
            </div>
        <?php if (isset($content['field_professional_degrees_intro'])) : ?>
            <div class="bp2-wdn-col-two-sevenths">
                <?php print render($content['field_professional_degrees_intro']); ?>
            </div>
            <div class="bp2-wdn-col-three-sevenths">
                <?php print render($content['field_professional_degrees']); ?>
            </div>
        <?php else: ?>
        <div class="bp2-wdn-col-five-sevenths">
            <?php print render($content['field_professional_degrees']); ?>
        </div>
            <div class="bp2-wdn-col-two-sevenths">
                <h3>
                    <?php print $content['field_professional_schools']["#title"]; ?>
                </h3>
                <?php print render($content['field_professional_schools']); ?>
            </div>
        <?php endif; ?>
        </section>
    </div>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper" id="additional-resources">
        <section class="wdn-grid-set">
            <div class="wdn-col-full">
                <h2 class="ec-heading flag">
                    <span><?php print $content['field_additional_resources']["#object"]->title; ?></span>
                    <?php print $content['field_additional_resources']["#title"]; ?>
                </h2>
                <?php print render($content['field_additional_resources']); ?>
            </div>
        </section>
    </div>
</div>
<script>
    WDN.loadJQuery(function() {
        var ec = (function($) {
            var navBar = $('#page-navigation'), 
            loadedWidth, 
            refTop, 
            navBarHeight,
            navBarMarginTop,
            navBarMarginBottom, 
            refOffset;

            return {

                initialize : function () {
                    // Inject an empty element before the nav to serve as our baseline & filler
                    navBar.before('<div id="nav-bar-reference" class="wdn-band" />');
                    refDiv = $('#nav-bar-reference');
                    ec.calcDimensions();
                    ec.setPosition();

                    // Bind the smooth scroll to the in-page nav
                    $('#slider-nav a').each(function () {
                        $(this).on('click', function (e) {
                            e.preventDefault();
                            theLocation = $(this.hash).offset().top - (navBarHeight/2);
                            WDN.log(theLocation);

                            $('html, body').animate({
                                scrollTop: theLocation
                            }, 500);
                            if(history.pushState) {
                                history.pushState(null, null, this.href);
                            }
                            else {
                                location.href = this.href;
                            }
                        })
                    });
                    
                    // Bind scrollbar so the in-page nav moves with the scroll
                    $(window).on('scroll', function () {
                        ec.setPosition();
                    });

                    $(window).on('resize', function() {
                        // Reset all the calculations to accomodate this resize
                        ec.calcDimensions();
                        ec.setPosition();
                    });
                },

                calcDimensions : function () {
                    loadedWidth = refDiv.width();
                    navBarHeight = parseInt(navBar.outerHeight(true));
                    navBarMarginTop = parseInt(navBar.css('marginTop'));
                    refTop = refDiv.offset().top;
                    refOffset = refTop + navBarMarginTop;
                },

                setPosition : function () {
                    if ($(window).scrollTop() >= refOffset) {
                        navBar.css({'position' : 'fixed', 'top' : (navBarMarginTop * -1) + 'px', 'width' : loadedWidth, 'margin-top': navBarMarginTop});
                        refDiv.css({'margin-bottom' : navBarHeight + 'px'}); // shim
                    } else {
                        navBar.css({'position' : 'initial', 'width' : 'auto', 'margin-top' : '2em'});
                        refDiv.css({'margin-bottom' : 'auto'}); // shim
                    }
                }
            }

        }(WDN.jQuery));

        ec.initialize();
    });
</script>
<?php
    // Documentation
?>
<nav class="wdn-band " id="page-navigation">
    <div class="wdn-inner-wrapper">
        <ul class="horizontal-list slider-nav wdn-grid-set-sixths">
            <li class="wdn-col">
                <a href="#overview"><?php print $content['field_overview']["#title"]; ?></a>
            </li>
            <li class="wdn-col">
                <a href="#coursework"><?php print $content['field_coursework']["#title"]; ?></a>
            </li>
            <li class="wdn-col">
                <a href="#application-info"><?php print $content['field_application_information']["#title"]; ?></a>
            </li>
            <li class="wdn-col">
                <a href="#entrance-exams"><?php print $content['field_entrance_exams']["#title"]; ?></a>
            </li>
            <li class="wdn-col">
                <a href="#professional-degrees">Professional Degrees</a>
            </li>
            <li class="wdn-col">
                <a href="#additional-resources"><?php print $content['field_additional_resources']["#title"]; ?></a>
            </li>
        </ul>
    </div>
</nav>
<div class="wdn-band">
    <div class="wdn-inner-wrapper">
        <section id="overview" class="bp2-wdn-grid-set-halves">
            <figure class="wdn-col">
                <?php print render($content['field_program_photo']); ?>
            </figure>
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
<div class="wdn-band">
    <div class="wdn-inner-wrapper" id="professional-degrees">
        <section id="coursework" class="wdn-grid-set">
            <div class="bp2-wdn-col-two-thirds">
                <h2 class="ec-heading">
                    <span><?php print $content['field_coursework']["#object"]->title; ?></span>
                    <?php print $content['field_coursework']["#title"]; ?>
                </h2>
                <?php print render($content['field_coursework']); ?>
            </div>
            <div class="bp2-wdn-col-one-third">
                <?php print render($content['field_program_checklist']); ?>
            </div>
        </section>
    </div>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper">
        <section id="application-info" class="wdn-grid-set">
            <div class="bp2-wdn-col-two-thirds">
                <h2 class="ec-heading">
                    <span><?php print $content['field_application_information']["#object"]->title; ?></span>
                    <?php print $content['field_application_information']["#title"]; ?>
                </h2>
                <?php print render($content['field_application_information']); ?>
            </div>
            <div class="bp2-wdn-col-one-third">
                Anything we can put here?
            </div>
        </section>
    </div>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper" id="entrance-exams" >
        <section class="bp2-wdn-grid-set-halves">
            <div class="wdn-col">
                <h2 class="ec-heading">
                    <span><?php print $content['field_entrance_exams']["#object"]->title; ?></span>
                    <?php print $content['field_entrance_exams']["#title"]; ?>
                </h2>
                <?php print render($content['field_entrance_exams']); ?>
            </div>
            <div class="wdn-col">
                Put a student success story here.
            </div>
        </section>
    </div>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper" id="professional-degrees">
        <section class="wdn-grid-set">
            <div class="wdn-col-full">
                <h2 class="ec-heading sec_header">
                    <span><?php print $content['field_professional_degrees_intro']["#object"]->title; ?></span>
                    Professional Degrees <?php // The field name is different, so just hard code for now ?>
                </h2>
            </div>
            <div class="bp2-wdn-col-two-sevenths">
                <?php print render($content['field_professional_degrees_intro']); ?>
            </div>
            <div class="bp2-wdn-col-three-sevenths">
                <h3>
                    <?php print $content['field_professional_degrees']["#title"]; ?>
                </h3>
                <?php print render($content['field_professional_degrees']); ?>
            </div>
            <div class="bp2-wdn-col-two-sevenths">
                <h3>
                    <?php print $content['field_professional_schools']["#title"]; ?>
                </h3>
                <?php print render($content['field_professional_schools']); ?>
            </div>
        </section>
    </div>
</div>
<div class="wdn-band">
    <div class="wdn-inner-wrapper" id="additional-resources">
        <section class="wdn-grid-set">
            <div class="wdn-col-full">
                <h2 class="ec-heading">
                    <span><?php print $content['field_additional_resources']["#object"]->title; ?></span>
                    <?php print $content['field_additional_resources']["#title"]; ?>
                </h2>
                <?php print render($content['field_additional_resources']); ?>
            </div>
        </section>
    </div>
</div>
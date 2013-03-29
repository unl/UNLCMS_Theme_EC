<?php
    // Documentation
?>
<div class="wdn-grid-set">
    <div class="bp2-wdn-col-one-third">
        <?php print render($content['field_adviser_photo']); ?>
    </div>
    <div class="bp2-wdn-col-two-thirds">
        <h2 class="ec-heading">
            <?php print $title; ?>
            <span> <?php print render($content['field_adviser_title']); ?> </span>
        </h2>
        <?php print render($content['field_adviser_appointment_link']); ?>
    </div>
</div>
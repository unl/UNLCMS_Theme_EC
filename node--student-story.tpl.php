<h2 class="ec-heading"><span><?php print render($content['field_sub_heading']); ?></span></h2>
<section id="node-<?php print $node->nid; ?><?php print ($view_mode != 'full' ? '-teaser' : ''); ?>" class="wdn-grid-set">
    <div class="bp1-wdn-col-two-fifths">
        <p class="summary">
            <?php print render($content['body']['#items'][0]['summary']); ?>
        </p>
    </div>
    <div class="bp1-wdn-col-three-fifths">
        <?php print render($content['field_student_photo']); ?>
    </div>
</section>
<section class="wdn-grid-set">
    <div class="bp1-wdn-col-one-third">
        &nbsp;
        <?php print render($content['field_pull_quote']); ?>
    </div>
    <div class="bp1-wdn-col-two-thirds">
        <?php print render($content['body']); ?>
    </div>
</section>
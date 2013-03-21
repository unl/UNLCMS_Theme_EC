<section id="node-<?php print $node->nid; ?><?php print ($view_mode != 'full' ? '-teaser' : ''); ?>" class="wdn-grid-set">
    <div class="wdn-col-two-thirds">
        <?php print render($content['body']); ?>
    </div>
    <div class="wdn-col-one-third">
        <?php print render($content['field_student_photo']); ?>
    </div>
</section>
 <div class="soothing-wrapper">
    <section id="node-<?php print $node->nid; ?><?php print ($view_mode != 'full' ? '-teaser' : ''); ?>" class="wdn-grid-set">
        <div class="wdn-col-three-fifths">
            <h2 class="ec-heading">
                <span>Student Success</span>
                <?php print $title; ?>
                <span class="heading-subhead"><?php print render($content['field_sub_heading']); ?></span>
            </h2>
            <?php print render($content['body']); ?>
            <?php print render($content['path']); ?>
            <a class="button mini" href="<?php print $node_url; ?>">Continue reading <?php print $title; ?>'s story</a>
        </div>
        <div class="wdn-col-two-fifths">
            <?php print render($content['field_student_photo']); ?>
        </div>
    </section>
</div> 
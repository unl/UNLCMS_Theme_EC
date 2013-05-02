 <div class="soothing-wrapper">
    <section id="node-<?php print $node->nid; ?><?php print ($view_mode != 'full' ? '-teaser' : ''); ?>" class="wdn-grid-set student-story-teaser">
        <div class="bp1-wdn-col-three-fifths">
            <?php print render($content['field_pull_quote']); ?>
            <div class="center">
                <a class="button mini" href="<?php print $node_url; ?>">Continue reading <?php print $title; ?>'s story</a>
            </div>
        </div>
        <div class="bp1-wdn-col-two-fifths">
            <?php print render($content['field_student_photo']); ?>
            <h2 class="ec-heading">
                <?php print $title; ?>
                <span class="heading-subhead"><?php print render($content['field_sub_heading']); ?></span>
            </h2>
        </div>
    </section>
</div> 
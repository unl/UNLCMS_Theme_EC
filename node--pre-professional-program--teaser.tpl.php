<a href="<?php print $node_url; ?>" class="block-link">
    <div id="node-<?php print $node->nid; ?>" class="visual-island grid-layout" <?php print $attributes; ?>>
        <figure class="first">
            <?php print render($content['field_program_photo']); ?>
        </figure>
        <div class="second">
            <h3 class="ec-heading small">
                <?php print $title; ?>
            </h3>
        </div>
    </div>
</a>
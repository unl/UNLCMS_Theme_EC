<li class="wdn-col">
    <span class="question" id="node-<?php print $node->nid; ?><?php print ($view_mode != 'full' ? '-teaser' : ''); ?>">
        <?php print $title; ?>
    </span>
    <div class="answer">
        <?php print render($content['field_answer']); ?>
    </div>
</li>
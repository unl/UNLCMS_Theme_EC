<?php if (isset($content['body'])) { // If we have an introduction, print it
    echo '<div class="csscolumns wdn-two-flow-columns">';
    print render($content['body']);
    echo '</div>';
}
?>
<div class="horizontal-separator">
    <?php
    // Check which columns have content to determine the grid structure to use
    if (isset($content['field_left_column']) && isset($content['field_middle_column'])) {
        $cols = array('left', 'middle');
    } elseif (isset($content['field_left_column'])) {
        $cols = array('left');
    } elseif (isset($content['field_middle_column'])) {
        $cols = array('middle');
    }

    if (count($cols) == 2) { // We have content for both columns
    ?>
        <div class="bp2-wdn-grid-set-halves">
            <section class="wdn-col">
                <?php if (isset($content['field_left_column_headline'])) : ?>
                    <h2 class="ec-heading"><?php print render($content['field_left_column_headline']); ?></h2>
                <?php endif; ?>
                <?php print render($content['field_left_column']); ?>
            </section>
            <section class="wdn-col">
                <?php if (isset($content['field_left_column_headline'])) : ?>
                    <h2 class="ec-heading"><?php print render($content['field_middle_column_headline']); ?></h2>
                <?php endif; ?>
                <?php print render($content['field_middle_column']); ?>
            </section>
        </div>
    <?php 
    } elseif (count($cols) == 1) { // We only have content for one column, show full width
        if ($cols[0] == 'left') {
            if (isset($content['field_left_column_headline'])) : ?>
                <h2 class="ec-heading"><?php print render($content['field_left_column_headline']); ?></h2>
            <?php endif;
            print render($content['field_left_column']);
        } else {
            if (isset($content['field_middle_column_headline']))  : ?>
                <h2 class="ec-heading"><?php print render($content['field_middle_column_headline']); ?></h2>
            <?php endif;
            print render($content['field_middle_column']);
        }
    }

    if(isset($content['field_outroduction'])) {
        echo '<div class="csscolumns wdn-two-flow-columns">';
        print render(($content['field_outroduction']));
        echo '</div>';
    }
    ?>
</div>
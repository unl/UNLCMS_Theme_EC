<div class="relative-holder">
    <img src="<?php echo path_to_theme() . '/images/explore_banner.jpg'; ?>" alt="EC Banner" class="wdn-stretch" />
    <div class="relative-content">
        <div class="bp2-wdn-grid-set-thirds">
            <div class="wdn-col wdn-center">
                <a href="find-your-major/" class="button soothing">Find your Major</a>
            </div>
            <div class="wdn-col wdn-center">
                <a href="programs/pre-health" class="button soothing">Pre-Health</a>
            </div>
            <div class="wdn-col wdn-center">
                <a href="programs/pre-law" class="button soothing">Pre-Law</a>
            </div>
        </div>
    </div>
</div>

<?php //print views_embed_view('homepage_graphics', 'block_1', $node->nid); ?>
<?php include 'events.php'; ?>
<?php print views_embed_view('advisers','band_block', $node->nid); ?>
<?php print views_embed_view('random_student_story','band_block', $node->nid); ?>
<div class="wdn-band" style="padding-bottom:0; line-height:0;">
    <img src="<?php echo drupal_get_path('theme', 'explore_center'); ?>/images/front-teaser.jpg" alt="Explore Major promo graphic" />
</div>
<?php include 'events.php'; ?>
<?php print views_embed_view('advisers','band_block', $node->nid); ?>
<?php print views_embed_view('random_student_story','band_block', $node->nid); ?>
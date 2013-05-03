<section class="content-wrapper">
    <div class="ribbon">
        <div class="ribbon-content">
            <h1><?php print $title; ?></h1>
        </div>
    </div>
    <div class="blurb">
        <div class="side-left">
            <?php print render($content['field_intro']); ?>
        </div>
        <div class="main-right">
            <?php print render($content['field_body']); ?>
        </div>
    </div>
    <?php print render($content['field_action_call']); ?>
</section>
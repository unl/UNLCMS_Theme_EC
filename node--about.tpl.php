<div class="bp1-wdn-col-two-thirds">
    <?php print render($content['field_introduction']); ?>
    <div class="horizontal-separator">
        <div class="bp2-wdn-grid-set-halves">
            <section class="wdn-col" id="undecided-students">
                <h2 class="ec-heading">Undecided Students</h2>
                <?php print render($content['field_undecided_students']); ?>
            </section>
            <section class="wdn-col" id="pre-professional-students">
                <h2 class="ec-heading">Pre-Professional Students</h2>
                <?php print render($content['field_pre_professional_students']); ?>
            </section>
        </div>
    </div>
    <div class="wdn-grid-set">
        <div class="wdn-col-full">
            <h2 class="ec-heading flag">Office Location &amp; Hours</h2>
        </div>
        <section class="bp2-wdn-col-two-thirds">
            <?php print render($content['field_office_location_intro']); ?>
        </section>
        <div class="bp2-wdn-col-one-third">
            <?php echo file_get_contents("http://maps.unl.edu/ADMN?format=staticgooglemapsv2&size=250x200&zoom=17"); ?>
        </div>
    </div>
</div>
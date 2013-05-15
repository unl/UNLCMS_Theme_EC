<div id="compass-nav">
    <div id="bar"></div>
    <div class="mask"></div>
    <div id="compass">
        <div id="needle"></div>
    </div>
    <ul class="sequence-pagination">
    	<li style="left: -8px; top: 105px;"><a class="milestone">1</a></li> 
    	<li style="left: 25px; bottom: 28px;"><a class="milestone">2</a></li> 
    	<li style="left: 108px; bottom: -8px;"><a class="milestone">3</a></li> 
    	<li style="right: 25px; bottom: 28px;"><a class="milestone">4</a></li> 
    	<li style="right: -8px; top: 105px;"><a class="milestone">5</a></li>
    </ul>
</div>
<section id="ps-viewport">
    <section id="ps-wrapper">
        <div id="sequence">
            <div class="clouds-3"></div>
            <div class="clouds-2"></div>
            <div class="clouds-1"></div>
            <div class="mountains"></div>
            <div class="mountains front"></div>
            <div class="far-hills"></div>
            <div class="far-hills front"></div>
            <div class="close-hills"></div>
            <div class="close-hills front"></div>
            <?php print render($content['field_major_sections']); ?>
            <span class="sequence-prev">&lt;</span>
			<span class="sequence-next">&gt;</span>
        </div>
    </section>
</section>
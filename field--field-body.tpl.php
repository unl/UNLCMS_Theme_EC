<div class="ec-region-list">
<?php
$i = 0;
$nid = $element['#object']->nid;
foreach ($items as $item) { ?>
    <article class="ec-region-article" id="region-<?php echo $nid . '-' .$i; ?>">
        <?php print render($item['#markup']); ?>
    </article>
<?php
    $i++;
} 
?>
</div>
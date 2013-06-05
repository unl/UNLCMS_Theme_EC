<ul class="ec-section-list">
<?php
$i = 0;
$nid = $element['#object']->nid;
foreach ($items as $item) { ?>
    <li>
        <a href="#region-<?php echo $nid . '-' .$i; ?>" class="ec-section-link">
            <?php print render($item['#markup']); ?>
        </a>
    </li>
<?php
    $i++;
} 
?>
</ul>
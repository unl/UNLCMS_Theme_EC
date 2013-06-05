<ul class="ec-section-list">
<?php
$i = 0;
$nid = $element['#object']->nid;
foreach ($items as $item) { ?>
    <li>
        <span class="fake-modal ec-section-link" data-tab="#region-<?php echo $nid . '-' .$i; ?>">
            <?php print render($item['#markup']); ?>
        </a>
    </li>
<?php
    $i++;
} 
?>
</ul>
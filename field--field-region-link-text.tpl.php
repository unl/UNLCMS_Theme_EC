<ul class="ec-section-list">
<?php
$i = 0;
$nid = $element['#object']->nid;
foreach ($items as $item) { 
    if ($i == 0) {
        $class = "now-selected";
    } else {
        $class = "";
    }
?>

    <li>
        <span class="fake-modal ec-section-link <?php echo $class; ?>" data-tab="#region-<?php echo $nid . '-' .$i; ?>">
            <?php print render($item['#markup']); ?>
        </a>
    </li>
<?php
    $i++;
} 
?>
</ul>
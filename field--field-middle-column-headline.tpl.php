<?php 
    foreach ($items as $item) :
?>
    <?php print render($item['#markup']); ?>
<?php 
    endforeach; 
?>
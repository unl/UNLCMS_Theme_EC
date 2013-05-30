<?php 
foreach ($items as $item) :
?>
    <figure>
        <?php print render($item); ?>
    </figure>
<?php endforeach; ?>
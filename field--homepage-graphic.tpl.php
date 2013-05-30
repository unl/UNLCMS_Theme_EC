<?php 
foreach ($items as $item) :
?>
    <figure class="student-photo">
        <?php print render($item); ?>
    </figure>
<?php endforeach; ?>
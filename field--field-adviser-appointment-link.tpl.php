<?php 
    foreach ($items as $item) :
?>
    <a href="<?php print render($item['#markup']); ?>"> Schedule an Appointment </a>
<?php 
    endforeach; 
?>
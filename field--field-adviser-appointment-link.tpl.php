<?php 
    foreach ($items as $item) :
?>
    <a class="button mini" href="<?php print render($item['#markup']); ?>"> Schedule an Appointment </a>
<?php 
    endforeach; 
?>
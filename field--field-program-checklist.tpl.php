<?php 
    foreach ($items as $item) :
?>
    <a class="button document width-control" href="<?php print render($item['#markup']); ?>"> Download the Program Checklist</a>
<?php 
    endforeach; 
?>
<?php 
    foreach ($items as $item) :
?>
    <a class="button document width-control" href="<?php print file_create_url($item['#file']->uri); ?>"> Download the Program Checklist</a>
<?php 
    endforeach; 
?>
<?php 
    foreach ($items as $item) :
?>
<figure class="round-frame cool">
    <?php print render($item); ?>
    <figcaption><?php print render($item["#item"]["alt"]); ?></figcaption>
</figure>
<?php 
    endforeach; 
?>
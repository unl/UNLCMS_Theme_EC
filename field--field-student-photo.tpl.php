<?php 
foreach ($items as $item) :
?>
<figure class="frame">
    <?php print render($item); ?>
    <figcaption><?php print render($item["#item"]["alt"]); ?></figcaption>
</figure>
<?php endforeach; ?>
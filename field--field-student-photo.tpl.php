<?php 
foreach ($items as $item) :
?>
<figure class="round-frame large">
    <?php print render($item); ?>
    <figcaption><?php print render($item["#item"]["alt"]); ?></figcaption>
</figure>
<?php endforeach; ?>
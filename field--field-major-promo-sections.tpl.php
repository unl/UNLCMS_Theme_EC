<ul>
    <?php 
    foreach ($items as $item) {
        echo '<li>';
        print render($item['#markup']);
        echo '</li>';
    }
    ?>
</ul>
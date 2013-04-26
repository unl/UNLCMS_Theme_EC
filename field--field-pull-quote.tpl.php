<blockquote class="wdn-pull-quote soothing">
    <?php 
    foreach ($items as $item) {
        print render($item['#markup']);
    }
    ?>
</blockquote>
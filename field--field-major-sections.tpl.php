<ul class="sequence-canvas">
    <?php 
    $i = 0;
    foreach ($items as $item) {
        $i++;
        echo '<li>';
            echo '<div id="frame'.$i.'">';
                print render($item);
            echo '</div>';
        echo '</li>';
    }
    ?>
</ul>
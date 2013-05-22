<ul class="sequence-canvas">
    <?php 
    $i = 0;
    foreach ($items as $item) {
        $i++;
        echo '<li id="frame-'.$i.'">';
            echo '<div class="slide-'.$i.'">';
                print render($item);
            echo '</div>';
        echo '</li>';
    }
    ?>
</ul>
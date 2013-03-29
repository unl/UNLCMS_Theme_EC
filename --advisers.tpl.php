<?php foreach ($rows as $id => $row): ?>
    <section class="wdn-col">
        <div class="visual-island <?php print $classes_array[$id]; ?>">
            <?php print $row; ?>
        </div>
    </section>
<?php endforeach; ?>
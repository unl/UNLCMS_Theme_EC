<?php if (!empty($title)): ?>
    <h2><?php print $title; ?></h2>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
    <div class="wdn-col">
        <div class="visual-island <?php print $classes_array[$id]; ?>">
            <?php print $row; ?>
        </div>
    </div>
<?php endforeach; ?>
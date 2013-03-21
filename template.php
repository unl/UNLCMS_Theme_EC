<?php

function explore_center_preprocess_node ( &$vars ) {
    if ($vars["is_front"]) {
        $vars["theme_hook_suggestions"][] = "node__front";
    }

    if ($vars["view_mode"] == 'full') {
        $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__full';
        $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__full';
    }
    elseif ($vars["view_mode"] == 'teaser') {
        $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__teaser';
        $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__teaser';
    }
}

// Pull in external style sheet for the WDN v3 Grid
function explore_center_preprocess_html ( &$variables ) {
    drupal_add_css('http://www.unl.edu/wdn/templates_3.1/css/content/grid-v3.css', array('type' => 'external'));
    // External CSS used for testing to circumvent the cache. Remove from production.
    drupal_add_css('http://ucommmeranda.unl.edu/workspace/UNL_drupal_themes/explore_center/explore_center.css', array('type' => 'external'));
}

// New markup for the PDF Checklists
function explore_center_field__field_program_checklist ( $vars ) {
    $output = '';

    foreach ($vars['items'] as $delta => $item) {
        $output .= '<a href="' . file_create_url($item['#file']->uri) . '" class="">Download the Program Checklist</a>';
        //$output .= '<pre>' . print_r($item->#file) . '</pre>';
    }

    return $output;
}
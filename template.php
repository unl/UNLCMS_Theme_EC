<?php

function explore_center_preprocess_node (&$vars) {
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
    elseif ($vars["view_mode"] == 'abbr_teaser') {
        $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__abbr_teaser';
        $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__abbr_teaser';
    }
}

// Pull in external style sheet for the WDN v3 Grid
function explore_center_preprocess_html (&$vars) {
    drupal_add_css('http://www.unl.edu/wdn/templates_3.1/css/content/grid-v3.css', array('type' => 'external'));
    // External CSS used for testing to circumvent the cache. Remove from production.
}

/**
 * Implements template_preprocess_region().
 * Adds grid classes for sidebar_first, sidebar_second, and content regions.
 */
function explore_center_preprocess_region (&$vars) {
    if ($vars['region'] == 'content') {
        $menu_object = menu_get_object();
        //print_r($menu_object); exit;
        if (isset($menu_object)) {
            if ($menu_object->type == 'about' || $menu_object->type == 'layout_two_columns_column_block') {
                $vars['classes_array'][] = 'wdn-grid-set';
                //print_r($vars['classes_array']); exit;
                foreach ($vars['classes_array'] as $key => $value) {
                    if (in_array($value, array('grid12', 'first'))) {
                        unset($vars['classes_array'][$key]);
                    }
                }
            }
            // Add the parallax CSS to just the parallax page.
            if ($menu_object->type == 'major_promo_collection') {
                drupal_add_css(drupal_get_path('theme', 'explore_center') . "parallax.css");
            }
        }
    }
}
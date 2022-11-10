<?php
  function register_resources() {
    wp_register_script('app', get_template_directory_uri() . '/js/app.js', [], '1.0.0', true);
    wp_register_style('styles', get_template_directory_uri() . '/css/styles.css', [], '1.0.0', 'all');
    wp_register_style('custom-styles', get_template_directory_uri() . '/css/custom-styles.css', [], '1.0.0', 'all');
  }

  add_action('init', 'register_resources');
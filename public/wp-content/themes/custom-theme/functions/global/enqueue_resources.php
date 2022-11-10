<?php
  function enqueue_resources() {
    wp_enqueue_style('styles');
    wp_enqueue_style('custom-styles');
    wp_enqueue_script('app');
  }

  add_action('wp_enqueue_scripts', 'enqueue_resources');
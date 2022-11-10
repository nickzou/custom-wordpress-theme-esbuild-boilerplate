<?php
  function theme_setup() {
    register_nav_menus(
      []
    );

    add_theme_support('post-thumbnails');
  }

  add_action('after_setup_theme', 'theme_setup');
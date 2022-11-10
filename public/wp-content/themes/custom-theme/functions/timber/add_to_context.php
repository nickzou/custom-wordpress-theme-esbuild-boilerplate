<?php

  function add_to_context() {
    $context = Timber::get_context();

    return $context;
  }

  add_action('timber/context', 'add_to_context');
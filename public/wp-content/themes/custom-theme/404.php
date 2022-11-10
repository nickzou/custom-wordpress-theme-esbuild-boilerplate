<?php
  $context = Timber::context();

  get_header(null, $args = $context);

  echo 'oops, can\'t find your page';

  get_footer(null, $args = $context);

?>
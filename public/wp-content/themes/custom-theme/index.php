<?php
  $context = Timber::context();

  get_header(null, $args = $context);

  if(have_posts()):

    while(have_posts()):

      the_post();

    endwhile;

  endif;

  get_footer(null, $args = $context);

?>
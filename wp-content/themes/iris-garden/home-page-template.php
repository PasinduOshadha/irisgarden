<?php

/**
 * Template Name: Home page
 * Description: Page template with Sidebar on the left side.
 *
 */

get_header();

the_post();
?>

<div id="post-<?php the_ID(); ?>" class="page-wrapper <?php post_class('content'); ?>">
<section>
	<div class="container cover">
		<div class="row">
			<div class="col-md-6 d-flex">
				<h3>You’ve always been beautiful</h3>
				<h1>Now you’re just deciding to have even <span class="text-hightlight-orange">healthier, brighter and clearer</span> skin</h1>
				<img class="img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/stamps.png" alt="">
				<button class="btn btn-primary iris-btn mt-5">Learn More</button>
			</div>
			<div class="col-md-6">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/img/cover-product.png" alt="" srcset="" class="img-fluid">
			</div>
		</div>
	</div>
</section>
<section class="our-products">
	<h2>Our Products</h2>
	<p>Discover, Recognize and Understand more about natural ingredients, we belive in making the cultural change by spreading the knowwledge from one community to another making a tremendous impact on our way of life.</p>
	<div class="container">
		<div class="row">
			<div class="col-md-3 text-center">
				<img class="img-fluid" src="<?php echo get_template_directory_uri() . '/assets/img/Fuller’s Earth Face Wash e 100ml.png' ?>" alt="">
				<h4>Fuller’s Earth Face Wash e 100ml</h4>
				<div class="small-text">For all skin types</div>
				<div class="home-product-price">Rs.1150.00</div>
			</div>
			<div class="col-md-3"></div>
			<div class="col-md-3"></div>
			<div class="col-md-3"></div>
		</div>
	</div>
</section>
</div><!-- /#post-<?php the_ID(); ?> -->
<?php
get_footer();

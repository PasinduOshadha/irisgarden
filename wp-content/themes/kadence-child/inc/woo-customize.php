<?php

/**
 * This file is used to customize woocommerce actions and hooks 
 *
 */

/** 
 * =======================================
 * Reordering the woo components
 * =======================================
 * 
 */

/**
 * Move product meta after title
 * Display only product SKU
 */

remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
add_action('woocommerce_single_product_summary', 'iris_garden_show_sku_again_single_product', 6);

function iris_garden_show_sku_again_single_product()
{
    global $product;
?>
    <div class="product_meta">
        <?php if (wc_product_sku_enabled() && ($product->get_sku() || $product->is_type('variable'))) : ?>
            <span class="sku_wrapper"><?php esc_html_e('SKU:', 'woocommerce'); ?> <span class="sku"><?php echo ($sku = $product->get_sku()) ? $sku : esc_html__('N/A', 'woocommerce'); ?></span></span>
        <?php endif; ?>
    </div>
<?php
}

/**
 * Move product short description after SKU
 */
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
add_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 9);


/**
 * hide default woo stock html
 */

add_filter('woocommerce_stock_html', 'hide_stock_html', 10, 3);
function hide_stock_html()
{
    return '';
}


/**
 * Add product stock html after sku with new stock html function
 * https://stackoverflow.com/questions/38243316/how-can-i-remove-the-product-inventory-count-from-the-shop-page-on-woocommerce#:~:text=Navigate%20to%20WooCommerce%20%3E%20Settings%20%3E%20Product,Amount%22%20from%20the%20drop%20down.
 */

add_action('woocommerce_single_product_summary', 'display_product_stock', 8);
function display_product_stock()
{

    global $product;

    $availability = $product->get_availability();
    $markup = '<p class="stock ' . $availability['class'] . '">' . $availability['availability'] . '</p>';

    _e($markup);
}


/**
 * Disable woocommerce tabs (Description, reviews)
 */

remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10);
add_action('woocommerce_after_single_product_summary', 'bbloomer_wc_output_long_description', 10);

function bbloomer_wc_output_long_description()
{
?>
    <div class="woocommerce-tabs">
        <?php the_content(); ?>
    </div>
    
    <div class="woocommerce-tabs">
        <?php comments_template(); ?>
    </div>
<?php
}

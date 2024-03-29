<?php

namespace ZionBuilderPro\Elements\WooAddToCart;

use ZionBuilderPro\Elements\WooCommerceElement;

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Class WooAddToCart
 *
 * @package ZionBuilderPro\Elements
 */
class WooAddToCart extends WooCommerceElement {
	/**
	 * Get type
	 *
	 * Returns the unique id for the element
	 *
	 * @return string The element id/type
	 */
	public function get_type() {
		return 'woo-add-to-cart';
	}

	/**
	 * Get name
	 *
	 * Returns the name for the element
	 *
	 * @return string The element name
	 */
	public function get_name() {
		return __( 'Woo add to cart', 'zionbuilder-pro' );
	}

	/**
	 * Get keywords
	 *
	 * Returns the keywords for this element
	 *
	 * @return array The list of element keywords
	 */
	public function get_keywords() {
		return [ 'cart', 'woocommerce' ];
	}


	/**
	 * Get Element Icon
	 *
	 * Returns the icon used in add elements panel for this element
	 *
	 * @return string The element icon
	 */
	public function get_element_icon() {
		return 'element-woo-add-to-cart';
	}

	/**
	 * Get Category
	 *
	 * Will return the element category
	 *
	 * @return string
	 */
	public function get_category() {
		return 'woocommerce';
	}

	/**
	 * Render
	 *
	 * Will render the element based on options
	 *
	 * @param mixed $options
	 *
	 * @return void
	 */
	public function render( $options ) {
		$product_id = $options->get_value( 'product_id', 'current' );
		$product    = $this->get_woocommerce_product(
			$product_id,
			[
				'product',
				'post',
			]
		);

		if ( ! $product instanceof \WC_Product ) {
			$this->reset_woocommerce_product_query();
			return;
		}

		\woocommerce_template_single_add_to_cart();

		$this->reset_woocommerce_product_query();
	}

	public function on_register_styles() {
		$this->register_style_options_element(
			'add_button',
			[
				'title'                   => esc_html__( 'Add to cart button', 'zionbuilder-pro' ),
				'selector'                => '{{ELEMENT}} .single_add_to_cart_button',
				'allow_custom_attributes' => false,
				'allow_class_assignments' => false,
			]
		);

		$this->register_style_options_element(
			'price_ammount',
			[
				'title'                   => esc_html__( 'Quantity input', 'zionbuilder-pro' ),
				'selector'                => '{{ELEMENT}} .input-text.qty.text',
				'allow_custom_attributes' => false,
				'allow_class_assignments' => false,
			]
		);
	}
}

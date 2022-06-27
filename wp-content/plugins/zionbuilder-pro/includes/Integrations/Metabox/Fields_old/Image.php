<?php

namespace ZionBuilderPro\Integrations\Metabox\Fields;

/**
 * Class FieldBase
 *
 * Base class for all Metabox fields
 *
 * @package ZionBuilderPro\DynamicContent\Fields
 */
class Image extends FieldBase {
	public function get_category() {
		return [
			self::CATEGORY_IMAGE,
		];
	}

	/**
	 * Render the output for this field
	 *
	 * @param mixed $field_config
	 */
	public function render( $field_config ) {
		$field_id = $this->field_config['field_id'];
		$field    = rwmb_get_field_settings( $field_id, array(), null );

		if ( ! empty( $field ) && ( 'color' === $field['type'] ) ) {
			echo rwmb_get_value( $field_id );
		} else {
			rwmb_the_value( $field_id );
		}
	}
}

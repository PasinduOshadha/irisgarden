<?php

namespace ZionBuilderPro\Integrations\Metabox\Fields;

use ZionBuilderPro\DynamicContent\BaseField;

/**
 * Class FieldBase
 *
 * Base class for all Metabox fields
 *
 * @package ZionBuilderPro\DynamicContent\Fields
 */
class FieldBase extends BaseField {
	const GROUP_NAME = 'METABOX';

	/**
	 * Holds a reference to the field group
	 *
	 * @var string
	 */
	private $group = '';

	/**
	 * Undocumented variable
	 *
	 * @var string
	 */
	private $name = '';


	private $field_config = [];

	public function __construct( $field_name, $field_id, $group, $field_config ) {
		$this->group = $group;
		$this->name  = $field_name;
		$this->id    = $field_id;

		// Metabox specific properties
		$this->field_config = $field_config;
	}

	public function get_category() {
		return [
			self::CATEGORY_TEXT,
			self::CATEGORY_IMAGE,
			self::CATEGORY_LINK,
		];
	}

	public function get_group() {
		return $this->group;
	}

	public function get_id() {
		return $this->id;
	}

	public function get_name() {
		return $this->name;
	}

	public function get_options() {
		return [];
	}

	public function get_post_id() {
		$post_id = null;

		if ( $this->field_config['object_type'] === 'setting' ) {
			$post_id = $this->field_config['group'];
		}

		return $post_id;
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

	public function get_the_value() {
		$field_id = $this->field_config['field_id'];
		return rwmb_get_value( $field_id );
	}
}

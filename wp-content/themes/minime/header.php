<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Minime
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?= is_page('avatars') ? "dir='rtl'" : "" ?>>
<head>
	<?php 
		if(is_page('avatars')) :
	?>
		<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">
	<?php else : ?>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
	<?php endif; ?>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">



	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

'use strict';
$(function(){
	$('.product ul li>a').click( function(){
	var $index=$(this).index();
	console.log( $index)
	$(this).addClass('cur').siblings().removeClass('cur')
	$('.product .product-list >.section').eq($index).show().siblings().hide()
} );
})

'use strict';
$('.user-list li').click(function (event) {
	var index = $( this ).index();
	$( '.user-list li' ).eq( index ).addClass( 'active' ).siblings().removeClass( 'active' );
});

'use strict';
// 首页轮播图
var num = 0;
var timer = null;
var i_circle = $( '.banner .lb li' );
var i_banner = $( '.banner_list li' );
// 自动轮播
function autoPlay(){
	timer = setInterval( function(){
		num++;
		if(num == i_circle.length+1){
			num=0;
		}
		i_circle.eq(num).addClass( 'cur' ).siblings().removeClass('cur');
		i_banner.eq(num).fadeIn(600).siblings().fadeOut();
	},3000 );
}
//调用自动轮播
autoPlay();
// 经过小圆点切换
i_circle.hover( function(){
	clearInterval(timer);
	$( this ).addClass( 'cur' ).siblings().removeClass('cur');
	num = $( this ).index();
	i_banner.eq(num).fadeIn(600).siblings().fadeOut();
},function(){
	autoPlay();
	});
// 鼠标经过banner图事件
i_banner.hover(function(){
	clearInterval(timer);	
},function(){
	autoPlay();
	});

//tab栏切换
$( '.i_tab_l>li>a' ).click( function(){
	$( this ).parent('li').addClass('cur').siblings().removeClass('cur');
	$( this ).parent('li').addClass('show').siblings().removeClass('show');
} );

/*嵌套Tab*/
function doubleTab ( aEle , bEle , cls){
	$( aEle ).click( function(){
		$( this ).addClass(cls).siblings().removeClass(cls);
		var num = $( this ).index();
		$( bEle ).eq(num).addClass('i_show').siblings().removeClass('i_show');
	} );
}

doubleTab( '.travel .i_title>a' , '.travel .discount' , 'line');
doubleTab( '.hotel .i_title>a' , '.hotel .discount' , 'line');
doubleTab( '.fly .i_title>a' , '.fly .discount' , 'line');
doubleTab( '.idea .i_title>a' , '.idea .discount' , 'line');


/*特卖汇*/

$( '.i-sale>ul>li>a' ).click( function(){
	$( this ).parent('li').addClass('i-line').siblings().removeClass('i-line');
	$( this ).parent('li').addClass('sale-show').siblings().removeClass('sale-show');
} );

doubleTab( '.i-sale-wrapone .i-sale-top>a' , '.i-sale-wrapone .sale-con' , 'i-sale-cur');
doubleTab( '.i-sale-wraptwo .i-sale-top>a' , '.i-sale-wraptwo .sale-con' , 'i-sale-cur');
doubleTab( '.i-sale-wrapthree .i-sale-top>a' , '.i-sale-wrapthree .sale-con' , 'i-sale-cur');


/* CitySelector 初始化*/
var test_one=new Vcity.CitySelector({input:'citySelect_one'});
var test_two=new Vcity.CitySelector({input:'citySelect_two'});
var test_three=new Vcity.CitySelector({input:'citySelect_three'});
var test_four=new Vcity.CitySelector({input:'citySelect_four'});
var test_five=new Vcity.CitySelector({input:'citySelect_five'});
var test_six=new Vcity.CitySelector({input:'citySelect_six'});


/*文字显示隐藏*/
	var iH , iHH ;
	// $( '.i-sale-p' ).css( 'bottom',-iH );
	$( '.i-sale-con li' ).hover( function(){
		iH = $(this).height() - $(this).find('.i-sale-p').height();
		/*console.log($(this).height())
		console.log($(this).find('.i-sale-p').height())*/
		$(this).find('.i-sale-p').css( 'top', iH );
	},function(){
		iHH = $(this).height() - $(this).find('h3').height()
		$(this).find('.i-sale-p').css( 'top', iHH );
	} );


/*酒店*/

$( '.i-hotel .sale-con li' ).hover(function() {
	$( this ).addClass('i-hotel-active');
}, function() {
	$( this ).removeClass('i-hotel-active');
});

doubleTab( '.i-hotel .i-sale-wrapone .i-sale-top>a' , '.i-hotel .i-sale-wrapone .sale-con' , 'i-sale-cur');
doubleTab( '.i-hotel .i-sale-wraptwo .i-sale-top>a' , '.i-hotel .i-sale-wraptwo .sale-con' , 'i-sale-cur');
doubleTab( '.i-hotel .i-sale-wrapthree .i-sale-top>a' , '.i-hotel .i-sale-wrapthree .sale-con' , 'i-sale-cur');
doubleTab( '.i-hotel .i-sale-wrapfour .i-sale-top>a' , '.i-hotel .i-sale-wrapfour .sale-con' , 'i-sale-cur');


// 截取文字，可以实现多行的，内容增多显示省略号
$(".i-hotel h4").each(function() {
    if ($(this).text().length > 36) {
        $(this).html($(this).text().replace(/\s+/g, "").substr(0, 36) + "...")
    }
})





/*机票*/
$( '.i-ticket .sale-con li' ).hover(function() {
	$( this ).addClass('ticket-cur');
}, function() {
	$( this ).removeClass('ticket-cur');
});

doubleTab( '.i-ticket .i-sale-wrapone .i-sale-top>a' , '.i-ticket .i-sale-wrapone .sale-con' , 'i-sale-cur');
doubleTab( '.i-ticket .i-sale-wraptwo .i-sale-top>a' , '.i-ticket .i-sale-wraptwo .sale-con' , 'i-sale-cur');

/* 攻略 */
$( '.i-idea .sale-con li' ).hover(function() {
	$( this ).addClass('i-hotel-active');
}, function() {
	$( this ).removeClass('i-hotel-active');
});


/*旅游局合作伙伴*/
var numx = 0;
setInterval( function(){
	numx++;
	if( numx==5 ){
		$( '.i_organization ul' ).animate( {'top':0} )
		numx=0;
	}
	$( '.i_organization ul' ).animate( {'top':-numx*78} )
},3000 )







/*电梯*/
var h1 = $( '.i-sale' ).offset().top;
var h2 = $( '.i-hotel' ).offset().top;
var h3 = $( '.i-ticketF' ).offset().top;
var h4 = $( '.i-ideaF' ).offset().top;
var iWH = 10;

function change( numy ){
	$('.i-floor ul li').eq(numy).addClass('act').siblings().removeClass('act');
};

function userscroll(){
	var iScroll = $( document ).scrollTop();

	if( iScroll+30 >= h4 ){
		change(3);
	}else if( iScroll+30 >= h3 ){
		change(2);
	}else if( iScroll+30 >= h2 ){
		change(1);
	}else if( iScroll+10 >= h1 ){
		$( '.i-floor' ).fadeIn();
		change(0);
	}else{
		$( '.i-floor' ).fadeOut();
	}
}

$( document ).scroll( userscroll);

var arrTop = [ h1,h2,h3,h4 ]

$( '.i-floor ul li' ).click( function(){
	var numy = $( this ).index();
	 change( numy );

	$( document ).off();
	$( 'html,body' ).stop().animate( { 'scrollTop':arrTop[numy] },500,function(){
		$( document ).scroll( userscroll);
	} );
} );

/*懒加载*/

$("img.lazy").lazyload({ /*
  	placeholder: "../images/icon/lazyload.gif",*/
    effect: "fadeIn"
   }); 


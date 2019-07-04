
var picArry = [
	"/m/images/part6_role1_rc.png",
	"/m/images/part6_role2_rc.png",
	"/m/images/part6_role3_rc.png",
];

$(function(){

	var count = 0;
	var viewW = $(window).width();
	viewW = viewW < 750 ? 750 : viewW;
	var offsetW = (viewW - 750)/2;
	//init
	$('.loading-line.left').css("margin-left", viewW + 36);
	$('.loading-line.right').css("margin-left", -(viewW + 36));
	
	
	for (var i = 0; i < picArry.length; i++) {
		//$('.main').css('background', 'url('+picArry[i]+') no-repeat -10000px -10000px');
		var image = new Image();
		image.src = picArry[i];
		image.onload = function(){
			count++;
			var rate = count/picArry.length;
			//动效
			loadingRander(viewW, offsetW, rate);
			//跳转
			if(count >= picArry.length){
				setTimeout(() => {
					$('.loading-bg').hide();
					$('.content').show();
					//$('.main').css('background','');
				}, 1000);
			}
		}
		
	}
	//test
	/*var rate = 0;
	setInterval(() => {
		rate += 0.1;
		loadingRander(viewW, offsetW, rate);
	}, 200);*/
});

function loadingRander(viewW, offsetW, rate){
	if(rate >= 1){
		rate = 1;
	}
	var num = Number(rate * 100).toFixed(0);
	$('.loading-num').html(num);
	$('.loading-line.left').css("margin-left", viewW + 36 - (viewW/2 * rate) - offsetW);
	$('.loading-line.right').css("margin-left", -(viewW + 36 - (viewW/2 * rate) - offsetW));
}
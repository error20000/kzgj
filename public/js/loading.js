
var picArry = [
	"/images/role_1_rc.png",
	"/images/role_2_rc.png",
	"/images/role_3_rc.png",
	
	
	/*//人物序列帧
	//1 hf
	"/images/role/hf/1/000.png",
	"/images/role/hf/1/001.png",
	"/images/role/hf/1/002.png",
	"/images/role/hf/1/003.png",
	"/images/role/hf/1/004.png",
	"/images/role/hf/1/005.png",
	"/images/role/hf/1/006.png",
	"/images/role/hf/1/007.png",
	"/images/role/hf/1/008.png",
	"/images/role/hf/1/009.png",
	"/images/role/hf/1/010.png",
	"/images/role/hf/1/011.png",
	"/images/role/hf/1/012.png",
	"/images/role/hf/1/013.png",
	"/images/role/hf/1/014.png",
	"/images/role/hf/1/015.png",
	//1 rc
	"/images/role/rc/1/000.png",
	"/images/role/rc/1/001.png",
	"/images/role/rc/1/002.png",
	"/images/role/rc/1/003.png",
	"/images/role/rc/1/004.png",
	"/images/role/rc/1/005.png",
	"/images/role/rc/1/006.png",
	"/images/role/rc/1/007.png",
	"/images/role/rc/1/008.png",
	"/images/role/rc/1/009.png",
	"/images/role/rc/1/010.png",
	"/images/role/rc/1/011.png",
	"/images/role/rc/1/012.png",
	"/images/role/rc/1/013.png",
	"/images/role/rc/1/014.png",
	"/images/role/rc/1/015.png",
	//2 hf
	"/images/role/hf/2/000.png",
	"/images/role/hf/2/001.png",
	"/images/role/hf/2/002.png",
	"/images/role/hf/2/003.png",
	"/images/role/hf/2/004.png",
	"/images/role/hf/2/005.png",
	"/images/role/hf/2/006.png",
	"/images/role/hf/2/007.png",
	"/images/role/hf/2/008.png",
	"/images/role/hf/2/009.png",
	"/images/role/hf/2/010.png",
	"/images/role/hf/2/011.png",
	"/images/role/hf/2/012.png",
	"/images/role/hf/2/013.png",
	"/images/role/hf/2/014.png",
	"/images/role/hf/2/015.png",
	//2 rc
	"/images/role/rc/2/000.png",
	"/images/role/rc/2/001.png",
	"/images/role/rc/2/002.png",
	"/images/role/rc/2/003.png",
	"/images/role/rc/2/004.png",
	"/images/role/rc/2/005.png",
	"/images/role/rc/2/006.png",
	"/images/role/rc/2/007.png",
	"/images/role/rc/2/008.png",
	"/images/role/rc/2/009.png",
	"/images/role/rc/2/010.png",
	"/images/role/rc/2/011.png",
	"/images/role/rc/2/012.png",
	"/images/role/rc/2/013.png",
	"/images/role/rc/2/014.png",
	"/images/role/rc/2/015.png",
	//3 hf
	"/images/role/hf/3/000.png",
	"/images/role/hf/3/001.png",
	"/images/role/hf/3/002.png",
	"/images/role/hf/3/003.png",
	"/images/role/hf/3/004.png",
	"/images/role/hf/3/005.png",
	"/images/role/hf/3/006.png",
	"/images/role/hf/3/007.png",
	"/images/role/hf/3/008.png",
	"/images/role/hf/3/009.png",
	"/images/role/hf/3/010.png",
	"/images/role/hf/3/011.png",
	"/images/role/hf/3/012.png",
	"/images/role/hf/3/013.png",
	"/images/role/hf/3/014.png",
	"/images/role/hf/3/015.png",
	//3 rc
	"/images/role/rc/3/000.png",
	"/images/role/rc/3/001.png",
	"/images/role/rc/3/002.png",
	"/images/role/rc/3/003.png",
	"/images/role/rc/3/004.png",
	"/images/role/rc/3/005.png",
	"/images/role/rc/3/006.png",
	"/images/role/rc/3/007.png",
	"/images/role/rc/3/008.png",
	"/images/role/rc/3/009.png",
	"/images/role/rc/3/010.png",
	"/images/role/rc/3/011.png",
	"/images/role/rc/3/012.png",
	"/images/role/rc/3/013.png",
	"/images/role/rc/3/014.png",
	"/images/role/rc/3/015.png"*/
];

$(function(){

	var count = 0;
	var viewW = $(window).width();
	viewW = viewW < 1200 ? 1200 : viewW;
	var offsetW = (viewW - 1200)/2;
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
					$('.main').show();
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
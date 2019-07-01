
var topArry = [0, 577, 1267, 2167, 3167, 4167, 5367, 6167];
var disabledScrollChangeNav = false;
$(function(){

	$('.part').hide();
	$('.part-1').show();
	$('.part .mid').addClass('test');
	
	//滚动条事件
	$(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
        var contentH = $(document).height();  //内容高度

        //console.log(scroH +"======"+viewH+"======="+contentH);

        //time-line 
        var timeLineMoveH = topArry[2];
        if(scroH > timeLineMoveH && scroH < viewH + timeLineMoveH){  //距离顶部大于100px时
        	$('.part-2').show();
        	var isMoved = $(".shade-box").hasClass("move");
        	if(!isMoved){
        		$(".shade-box").addClass("move");
        	}
        }
        //role part-3
        var roleMoveH = topArry[3];
        if(scroH > roleMoveH && scroH < viewH + roleMoveH){
        	$('.part-3').show();
        	var isMoved = $(".part-3 .txt-1").hasClass("move");
        	if(!isMoved){
        		$(".part-3 .txt-1").addClass("move");
        	}
        	var isMoved = $(".part-3 .role-1").hasClass("move");
        	if(!isMoved){
        		$(".part-3 .role-1").addClass("move");
        	}
        }
        // part-4
        var part4 =  topArry[4];
        if(scroH > part4 && scroH < viewH + part4){
        	$('.part-4').show();
        }
        // part-5
        var part5 =  topArry[5];
        if(scroH > part5 && scroH < viewH + part5){
        	$('.part-5').show();
        }
        // part-6
        var part6 =  topArry[6];
        if(scroH > part6 && scroH < viewH + part6){
        	$('.part-6').show();
        }
        // part-7
        var part7 =  topArry[7];
        if(scroH > part7 && scroH < viewH + part7){
        	$('.part-7').show();
        }
        
        //title  animated bounceInLeft
        /*for (var i = 0; i < topArry.length; i++) {
    		if(i == topArry.length - 1){
    			if(scroH >= topArry[i]){
    				$('.part-'+(i)+' .title').addClass('animated bounceInLeft');
    				break;
    			}
    		}else{
    			if(scroH >= topArry[i] && scroH < topArry[i+1]){
    				console.log('.part-'+(i+1)+' .title');
    				$('.part-'+(i)+' .title').addClass('animated bounceInLeft');
    				break;
    			}
    		}
    	}*/
 
        
        //goto top
        if(scroH > 900){
        	$('.news-top').show();
        }else{
        	$('.news-top').hide();
        }
        

        //切换导航效果
        if(!disabledScrollChangeNav){
        	for (var i = 0; i < topArry.length; i++) {
        		if(i == topArry.length - 1){
        			if(scroH >= topArry[i]){
        				$('.nav .nav-box li').removeClass('on');
        				$('.nav .nav-box li').eq(i).addClass('on');
        				break;
        			}
        		}else{
        			if(scroH >= topArry[i] && scroH < topArry[i+1]){
        				$('.nav .nav-box li').removeClass('on');
        				$('.nav .nav-box li').eq(i).addClass(' on');
        				break;
        			}
        		}
        	}
        }
    });
	
	//goto top
	$('.news-top').click(function(){
		disabledScrollChangeNav = true;
		$('html,body').animate({scrollTop: '0px'}, 1000);
		$('.nav .nav-box li').removeClass('on');
		$('.nav .nav-box li').eq(0).addClass('on');
		setTimeout(function(){
			disabledScrollChangeNav = false;
		}, 1000);
	});
	//nav
	$('.nav .nav-box li').click(function(){
		disabledScrollChangeNav = true;
		var index = $(this).index();
		var top = topArry[index];
		$('html,body').animate({scrollTop: top + 'px'}, 1000);
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		setTimeout(function(){
			disabledScrollChangeNav = false;
		}, 1000);
	});
	//role nav
	$('.part-3 .nav-content li').click(function(){
		var index = $(this).index();
		$('.txt').hide();
		$('.txt').eq(index).show();
		//$('.txt-box .txt-icon').css('background-image', 'url(/images/role_jn_'+(index+1)+'.png)');
		$('.role-mqs').hide();
		$('.role-mqs').eq(index).show();
	});
	$('.part-3 .nav-box .nav-right').click(function(){
		var contentWidth = $('.part-3 .nav-content').width();
		var ulWidth = $('.part-3 .nav-content ul').width();
		var left = $('.part-3 .nav-content ul').css("margin-left");
		left = Number(left.replace('px', ''));
		if(ulWidth - contentWidth > Math.abs(left)){
			left += -147;
		}
		$('.part-3 .nav-content ul').css("margin-left", left+"px");
	});
	$('.part-3 .nav-box .nav-left').click(function(){
		var contentWidth = $('.part-3 .nav-content').width();
		var ulWidth = $('.part-3 .nav-content ul').width();
		var left = $('.part-3 .nav-content ul').css("margin-left");
		left = Number(left.replace('px', ''));
		if(ulWidth - contentWidth < Math.abs(left)){
			left += 147;
		}
		$('.part-3 .nav-content ul').css("margin-left", left+"px");
	});
	
	//hf rc
	$('.role_tag_item').click(function(){
		var index = $(this).parent().index();
		var roleBg = $('.role_bg').eq(index);
		var isHf = $(roleBg).hasClass('hf');
		if(isHf){
			$('.role_bg').removeClass('hf');
			$('.role_bg').addClass('rc');
			$('.role_tag_item').removeClass('hf');
			$('.role_tag_item').addClass('rc');
		}else{
			$('.role_bg').removeClass('rc');
			$('.role_bg').addClass('hf');
			$('.role_tag_item').removeClass('rc');
			$('.role_tag_item').addClass('hf');
		}
	});
	
});
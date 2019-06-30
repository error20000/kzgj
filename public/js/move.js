
var topArry = [0, 677, 1367, 2267, 3267, 4267, 5467, 6267];
var disabledScrollChangeNav = false;
$(function(){

	//滚动条事件
	$(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
        var contentH = $(document).height();  //内容高度

        //console.log(scroH +"======"+viewH+"======="+contentH);

        //time-line 
        var timeLineMoveH = topArry[2];
        if(scroH > timeLineMoveH && scroH < viewH + timeLineMoveH){  //距离顶部大于100px时
        	var isMoved = $(".time-line ul").hasClass("move");
        	if(!isMoved){
        		$(".time-line ul").addClass("move");
        	}
        }
        //role part-3
        var roleMoveH = topArry[3];
        if(scroH > roleMoveH && scroH < viewH + roleMoveH){
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
        /*var part4 =  topArry[4];
        if(scroH > part4 && scroH < viewH + part4){
        	$('.pic-box').addClass('animated bounceInLeft');
        }*/
        
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
		//$('.role_bg').css('background-image', 'url(/images/role_jn_'+(index+1)+'.png)');
		//animation: hf_3 2s infinite steps(1);
		var roleBg = $('.role_bg').eq(index);
		var isHf = $(roleBg).hasClass('hf');
		if(isHf){
			$(roleBg).removeClass('hf');
			$('.role_bg').eq(index).css('animation', 'rc_'+(index+1)+' 2s infinite steps(1)');
		}else{
			$(roleBg).addClass('hf');
			$('.role_bg').eq(index).css('animation', 'hf_'+(index+1)+' 2s infinite steps(1)');
		}
	});
	
});
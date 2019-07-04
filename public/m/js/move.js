
var topArry = [0, 0, 400, 1800, 2900, 4200, 5300, 6700];
var activePart4 = false;
$(function(){

	$('.part').hide();
	$('.part-1').show();
	$('.part-2').show();
	$('.part .mide').addClass('test');
	$('.footer').hide();
	$('#cy_bot').hide();
	
	//滚动条事件
	$(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
        var contentH = $(document).height();  //内容高度

        //console.log(scroH +"======"+viewH+"======="+contentH);

        //part-2 
        var timeLineMoveH = topArry[1];
        if(scroH > timeLineMoveH && scroH < viewH + timeLineMoveH){  //距离顶部大于100px时
        	$('.part-2').show();
        }
        //part-3
        var roleMoveH = topArry[2];
        if(scroH > roleMoveH && scroH < viewH + roleMoveH){
        	$('.part-3').show();
        }
        // part-4
        var part4 =  topArry[3];
        if(scroH > part4 && scroH < viewH + part4){
        	$('.part-4').show();
        	if(!activePart4){
        		activePart4 = true;
        		setTimeout(() => {
        			$('.part-4 .slide').eq(0).addClass('active');
        		}, 1000);
        	}
        }
        // part-5
        var part5 =  topArry[4];
        if(scroH > part5 && scroH < viewH + part5){
        	$('.part-5').show();
        }
        // part-6
        var part6 =  topArry[5];
        if(scroH > part6 && scroH < viewH + part6){
        	$('.part-6').show();
        }
        // part-7
        var part7 =  topArry[6];
        if(scroH > part7 && scroH < viewH + part7){
        	$('.part-7').show();
        }
        // part-8
        var part8 =  topArry[7];
        if(scroH > part8 && scroH < viewH + part8){
        	$('.part-8').show();
        	$('.footer').show();
        	$('#cy_bot').show();
        }
        
 
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
	
	//点击大图
	$('.bg-video').click(function(){
		popup($("#pop1"));
	});

	//点击大图
	
	
});
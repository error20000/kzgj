var supportBrowser = $.support.leadingWhitespace;

var cont = $('.page');
//页面滚动
var wheel = {
    //prev:$('.page-prev'),
    //next:$('.page-next'),
    dom: cont,
    nav: $('.nav-list a'),
    cur: 0,
    run: false,
    len: cont.length,
    to: function (e) {
        var s = this;
        if (s.run || e== s.len ) return;
        s.run = true;
        s.nav.eq(e).addClass('on').siblings().removeClass('on');
        //$('.mod-bg').stop(true,true).animate({left:-e * cont.width()},1500);
        var ch = $('.mod-bg .bg').height();
        var _value =Math.floor($(window).height() - $('.mod-bg .bg').height())/2;
        if(e==0){
            $('.mod-bg').stop(true,true).animate({top:-e},1000);
        }else{
            $('.mod-bg').stop(true,true).animate({top:-e * ch+_value},1000);
        }
        if(e == s.len-1){
            if($(window).height()<800){
                $('#cyou_bottom').hide();
            }else{
                $('#cyou_bottom').show();
            }
        }else{
            $('#cyou_bottom').hide();
        }
        s.dom.eq(e).css({ zIndex: 2 }).addClass('current');
        $('.mod-bg .bg').removeClass('current').eq(e).addClass('current');
        if(e!= s.cur){
            s.dom.eq(s.cur).css({ zIndex: 1 }).removeClass('current');
        }
        $('.page-wrap').stop(true,true).animate({
            top:-e * cont.height()
            //top:-e * 1200
        },600, 'easeOutExpo', function (){
            s.cur = e;
            s.run = false;
        });
        //if(e == s.len-1) wheel.next.fadeOut(300);
        //else wheel.next.fadeIn(300);
        //$('.page-prev,.page-next').find('strong').removeClass().addClass('t'+(e+1));
    },
    init: function () {
        var s = this;
        if($('.mod-wrap').css('display')=='block'){
            $(document).on('mousewheel', function (e, delta) {
                if (s.run) return;
                var popHide = $('.pop').css('display')=='none';
                if (delta < 0 && s.cur != s.len - 1) {
                    s.to(s.cur + 1);
                    return false;
                }
                if (delta > 0 && s.cur != 0) {
                    s.to(s.cur - 1);
                    return false;
                }
            });

            $('.sidenav .s-nav').on('click',function (){
                s.to($(this).index());
            });
        }
    }
};
wheel.init();


var page = {
    cDom: $('.page-cont,.sidenav,.sloga'),
    isIE:/MSIE \d+\.\d+/.test(navigator.userAgent) && parseInt(/MS(IE) (\d+\.\d+)/.exec(navigator.userAgent)[2])<=10,
    isIE8:/MSIE \d+\.\d+/.test(navigator.userAgent) && parseInt(/MS(IE) (\d+\.\d+)/.exec(navigator.userAgent)[2])==8,
    isIE11:navigator.userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/),
    resize: function (){
        var zoomNum = 1, ww = $(window).height();
        //$('.mod-bg .bg,.page-wrap .page').css({width:ww});
        $('.page-wrap').css({height:ww*cont.length});

        if($(window).width()<1500||$(window).height()<850) {
            zoomNum = 0.8; $('.wrap').addClass('small-page');
            if(page.isIE) {
                $('.wrap').addClass('small-page-ie');
                if(page.isIE8) {
                    $('.wrap').addClass('small-page-ie8');
                }
            }
            if(page.isIE11) {
                $('.wrap').addClass('small-page-ie11');
            }
        }else {
            zoomNum = 1; $('.wrap').removeClass('small-page small-page-ie small-page-ie8');
        }
        //屏幕宽度大于1920时
        if($(window).width()>1920) {
            $('.topline').addClass('topline1920');
            $('.sidenav').addClass('sidenav1920');
            $('.float-code').addClass('floatcode1920');

        }else{
            $('.topline').removeClass('topline1920');
            $('.sidenav').removeClass('sidenav1920');
            $('.float-code').removeClass('floatcode1920');
        }
        var isFirefox = navigator.userAgent.indexOf("Firefox");
        if(isFirefox>0){
            page.cDom.css({'-moz-transform': 'scale(' + zoomNum + ')', '-moz-transform-origin': 'center center'});
        }else{
            if($(window).height()<750){
                page.cDom.css({'zoom': zoomNum});
                $('.sloga').css({'zoom':.7});
            }else{
                page.cDom.css({'zoom': zoomNum});
            }
        }
    },
    setHeight: function (){
        $('.wrap,.page').css({width:$(window).width(),height:$(window).height()});
    },
    pageToInner:function (){
        var reg = new RegExp("(^|&)page=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if(r){
            var num=parseInt(r[2]);
            if(num>=0&&num<=cont.length-1) {
                $('.page1').removeClass('current').hide();
                $('.mod-wrap').fadeIn(300);
                wheel.to(num);
                wheel.init();
            }
        }
    },
    init:function (){
        $('.page1').addClass('current');
    }
};
$(window).on('load resize',function (){
    page.resize();
    page.setHeight();
    page.pageToInner();
});
$(window).on('load',function (){
    page.init();
});

 $(window).on('resize',function (){
 wheel.to(0);
 });
//新闻列表 Tab
$('.mod-news .hd li').on('click',function(){
    var _e=$(this).index();
    $('.mod-news .hd li').siblings().removeClass('current');
    $(this).addClass('current');
    $('.mod-news .swiper-slide').stop(true,true).fadeOut();
    $('.mod-news .swiper-slide').eq(_e).stop(true,true).fadeIn();
})

//图片滚动
$('.pic-box').each(function (index) {
    var p = $(this);
    carousel.slide({
        initial: 0,
        item: p.find('.pic-list li'),//切换的内容（必填）
        nav: p.find('.pic-nav'),//切换的导航（必填）
        prev: p.find('.btn-prev'),//前一张按钮
        next: p.find('.btn-next'),//后一张按钮
        delay: 4000,//自动切换时间间隔，为0则不自动切换（默认：4000）
        duration: 500,//切换一次所需时间（默认500）
        callback: function () {}
    });
});
//渐变切换
$('.pic-box-fade').each(function (index) {
    var p = $(this);
    carousel.fade({
        initial: 1,
        item: p.find('.pic-list .swiper-slide'),//切换的内容（必填）
        nav: p.find('.pic-nav'),//切换的导航（必填）
        prev: p.find('.btn-prev'),//前一张按钮
        next: p.find('.btn-next'),//后一张按钮
        delay: 4000,//自动切换时间间隔，为0则不自动切换（默认：4000）
        duration: 500
    });
});
//角色切换
$('.tab-roles .tab-roles-nav li').on('click',function(){
    var _e=$(this).index(),
        i=$(this).index()+1;
    $('.tab-roles .tab-roles-nav li').removeClass('on');
    $(this).addClass('on');
    $('.tab-roles-cont').hide().removeClass('show-ani');
    $('.tab-roles-cont').eq(_e).show().addClass('show-ani');
    $('.page4 .roles').attr('class','roles');
    if(supportBrowser){
        playRoles('http://i0.cy.com/kzgj/main/2019/0508/roles0'+i+'/','roles roles-animation0'+i);
    }else{
        $('.page4 .roles').attr('class','roles roles-animation0'+i)
    }

});
if(supportBrowser){
    playRoles('http://i0.cy.com/kzgj/main/2019/0508/roles01/','roles roles-animation01');
}else{
    $('.page4 .roles').attr('class','roles roles-animation01');
}
function playRoles(_pathname,_roleNum){
    var source = {
        //pathname:'ossweb-img/frame/',
        pathname:_pathname,
        filename: [],
        length:16
    };
    for (var i = 1; i <= source.length; i++) {
        source.filename.push(source.pathname + i + '.png');
    }

    function preloadImage(names, cb, prefix) {
        window.gkaCache = window.gkaCache || [];
        var n = 0, img, imgs = {};
        names.forEach(function (name) {
            img = new Image();
            window.gkaCache.push(img);
            img.onload = (function (name, img) {
                return function () {
                    imgs[name] = img;
                    (++n === names.length) && cb && cb(imgs);
                }
            })(name, img);
            img.src = (prefix || '') + name;
        });
    }
    preloadImage(source.filename, function () {
        var hd = document.querySelector('.page4 .roles');
        hd.className = _roleNum;
    });
}
$(window).load(function(){
    $('.bg1').addClass('animate');
});
//pop
function showDia(id){
    showDialog.show({
        id:id, //需要弹出的id，如果是弹出页面上的div，则该选项为必选
        bgcolor:"#000",//弹出“遮罩”的颜色，格式为"#FF6600"，可选，默认为"#fff"
        opacity:70 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
    });
}

//背景音乐
 if(supportBrowser){
     var bgmPlay = function () {
     document.getElementById('bgMusic').pause();
     document.getElementById('bgMusic').play();
     
     $('.btn-music').addClass('music-on');
     };
     var bgmPause = function () {
     document.getElementById('bgMusic').pause();
     $('.btn-music').removeClass('music-on');
     };
     $('.btn-music').on('click', function () {
     if ($(this).hasClass('music-on'))
     bgmPause();
     else
     bgmPlay();
     });
     $(window).on('load', bgmPlay());
 }
if(supportBrowser){
    //视频播放
    $('.topvideo').on('click',function(){
       $('#pop-video-mp4').find('video').attr('src',$(this).attr('data-video'));
        showDia('pop-video-mp4');
        document.getElementById('videoTz').play();
    });
    //语音播放
    var soundPath = 'http://i0.cy.com/kzgj/main/2019/0508/sound/';
    function audioPlay(_mp3) {
        var audioSrc = _mp3, audio = document.createElement("audio");
        audio.src = audioSrc;
        audio.load();
        audio.play();
        return audio;
    }
    $('[data-mp3]').on('click',function(){
        var t = $(this), src = t.attr('data-mp3'), aud = audioPlay(soundPath + src);
        t.addClass('playVoice');
        aud.addEventListener('ended',function(){
            t.removeClass('playVoice');
        })
    })
}
//关闭视频
$('#pop-video-mp4 .btn-closed').click(function(){
    showDialog.hide();
    document.getElementById('videoTz').pause();
});

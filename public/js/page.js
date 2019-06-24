$(window).load(function(){
    $('.bg-top,.mod-news-list,.mod-news-detail').addClass('animate');
});
$(window).on('load scroll',function (){
    var sTop = $(window).scrollTop(),wh = $(window).height();
    $('.list-world li').each(function() {
        if(sTop >= $(this).offset().top - $(window).height()/1.1) {
            $(this).addClass('animate');
        }
    });
});

//返回顶部
$(function(){
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $(".btn-backtop").fadeIn("slow");
        }else{
            $(".btn-backtop").fadeOut("slow");
        }
    })
});
$('.btn-backtop').on('click',function(){
    $('html, body').animate({scrollTop: 0}, 200);
});

//新闻页视频调用
$('.cms_content_video').each(function(){
    var video_id = $(this).attr("video-id");
    if(video_id){
        $(this).find('span').commVideoPlayer({
            width : 560,
            height : 310,
            v_id : video_id,
            autoPlay: false
        });
    }
});
// 视频调用DOM结构
// <div class="center">
//      <div class="cms_content_video" video-id="5479506"><span>您的浏览器暂不支持播放此视频</span></div>
// </div>
//  首页tab切换
$('.lr_listNen ul li').click(function() {
    $(this).addClass('xz_select').siblings().removeClass('xz_select');
    $('.tab_qh>.xw_content').eq($(this).index()).fadeIn().siblings().hide();
})

var musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('mousedown', clickMusic);
var audio = document.getElementById('bgMusic');
//如果是和h5在微信交互的话
document.addEventListener("WeixinJSBridgeReady", function() { audio.play(); }, false);
var window_first = true;
$(window).bind("touchstart", function() {
    if (window_first == true) {
        audio.play();
        window_first = false;
    }
});

function clickMusic(e) {
    window_first = false;
    e.stopPropagation();
    if ($(this).hasClass('pause')) {
        $(this).removeClass('pause');
        audio.play();
    } else {
        $(this).addClass('pause');
        audio.pause();
    }
}

// 视频播放
$('.video_play a,.video_play i').on('click', function() {

        $('.video_zzc').show();
        $('#videoTz').attr('src',$('.video_play').attr('data-video'));
        $('#videoTz').trigger('play');
        document.addEventListener("WeixinJSBridgeReady", function () {
        	$('#videoTz').trigger('play');
        }, false);
        // document.getElementById('videoTz').play();
        audio.pause();

});

// 视频关闭
$('.btn-closed').click(function() {
    $('.video_zzc').hide();
    $('#videoTz').attr('src', ' ');
    document.getElementById('videoTz').pause();
    //audio.play();
})


$(window).load(function() {
    $('.sloga_box').addClass('animate');
});

//语音播放
var soundPath = 'http://i0.cy.com/kzgj/main/2019/0508/sound/';

function audioPlay(_mp3) {
    var audioSrc = _mp3,
        audio = document.createElement("audio");
    audio.src = audioSrc;
    audio.load();
    audio.play();
    return audio;
}
$('[data-mp3]').on('click', function() {
    var t = $(this),
        src = t.attr('data-mp3'),
        aud = audioPlay(soundPath + src);
    t.addClass('playVoice');
    //audio.pause();
    aud.addEventListener('ended', function() {
        t.removeClass('playVoice');
        //audio.play();
    })
})

//新闻等url重写
$(".xw_content ul li").each(function() {
    var href = $(this).find("a").attr("href");
    $(this).find("a").attr("href", "/m/article.shtml?id=" + href);
});
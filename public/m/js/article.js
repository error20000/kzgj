function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var id = getParameterByName("id");

$.ajax({
    url: id,
    type: "GET",
    dataType: "html",
    cache: "false",
    error: function() {
        //alert("html不存在");
    },
    success: function(data) {
        var tit = $(data).find("h1.title").html();
        $(".title").html(tit);
        $(".test_box").html($(data).find(".box-txt").html());
        $(".title_tiem").html($(data).find(".about-txt .time").eq(0).html());
        ShareTit = tit;
        //InitWX();
        var cms_video = [];
        $(".cms_content_video").each(function(index) {
            $(this).addClass("cms_content_video_" + index);
            var video_id = $(this).attr("video-id");
            cms_video[index] = playerFactory.createPlayer('.cms_content_video_' + index, {
                data: {
                    vid: video_id, //视频ID
                    site: 2 //vrs 1, ugc/pgc 2
                },
                autoplay: false
            });
        });
    }
});
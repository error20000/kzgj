var pageNum = 2, // 下一页页码
    pageState = $('.ui-refresh-label'); //状态反馈文字

//新闻导航当前状态判断
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//获取url参数link值
var address = getQueryString("link");
if (!address) {
    window.location = '/m/news.shtml?link=/m/multiple.shtml';
}
//遍历导航列表，判断有对应地址url参数的进行高亮，并进行ajax
$(".xbt_tab a").each(function() {
    var href = $(this).attr("href").split('?link=')[1].split(".shtml")[0].replace("/m/", '/');
    if (address.indexOf(href) > -1) {
        $(this).parent().addClass("page_select");
        $.ajax({
            url: "/kzgj" + href + href + ".shtml",
            type: 'GET',
            dataType: "html",
            success: function(hdata) {
                var obj = $(hdata).find(".news-list");
                var pages = $(hdata).find(".page-cont");
                //获取共有多少页数据请求
                var reg = /\/(\d*)/;
                var page = pages.html().match(reg)[1];
                pages.remove();
                $(".list_pageXw ul").empty();
                createList(obj.find("li"));

                if (page == 1) { //只有一页
                    pageState.text('没有更多内容了')
                } else {
                    pageState.text('点击加载更多')
                    pageState.on('click', function () { //有多页 文字提示 挂载事件
                        loadCon(href, page)
                    })
                }
            }
        })
    }
});
// 创建列表结构
function createList(list) {
    var str = '';
    list.each(function(index, el) {
        var link, title, newType, alight, time;
        link = $(el).find('a').attr('href');
        title = $(el).find('a').attr('title');
        newType = $(el).find('.brand').html();
        time = $(el).find('.time').html();
        link = link.replace('/kzgj/', '/m/article.shtml?id=/kzgj/')

        str += '<li>\
					<div class="le_bjBox">\
						<p>' + newType + '</p>\
						<em>' + time + '</em>\
					</div>\
					<div class="fr_link">\
						<a href="' + link + '" target="_blank" title="' + title + '">' + title + '</a>\
					</div>\
				</li>';
    })
    $(".list_pageXw ul").append(str);
}

//加载
function loadCon(a, b) {
    // a:href, b:page 参数对应
    pageState.text('加载中...')
    var pageurl = "/kzgj" + a + a + "_" + pageNum + ".shtml";
    console.log(pageurl)
    $.ajax({
        url: pageurl,
        dataType: "html",
        success: function (data) {
            var html = $(data).filter(".new_list");
            createList(html.find("li"));
            if (pageNum >= b) {
                pageState.text('没有更多内容了');
                pageState.off()
            } else {
                pageState.text('点击加载更多');
                pageNum++;
            }
        },
        error: function () {
            pageState.off();
            pageState.text('没有更多内容了');
        }
    });
}
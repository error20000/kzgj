var ShareTit = '一秒回到童年！Falcom 15年经典空之轨迹手游预约开启！';
var ShareImg = 'http://i0.cy.com/kzgj/main/2019/0508/share.png';
var ShareLink = location.href.split("#")[0];
var desc = '立即预约，还能领取限量超值礼包！';

function InitWX() {
    var host = location.host;
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "//join-activity.changyou.com/wechat/web/wx8fcf309675d53582/config",
        success: function(data) {
            //data.config.debug = true;
            data.config.jsApiList = ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
                // 分享临时方案
            wx.config(data.config);
        }
    });

    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: ShareTit, // 分享标题
            link: ShareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: ShareImg, // 分享图标
            success: function() {
                // 用户点击了分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: ShareTit, // 分享标题
            desc: desc, // 分享描述
            link: ShareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: ShareImg, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
                // 用户点击了分享后执行的回调函数
            }
        });
        wx.onMenuShareQZone({
            title: ShareTit, // 分享标题
            desc: desc, // 分享描述
            link: ShareLink, // 分享链接
            imgUrl: ShareImg, // 分享图标
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
        /*wx.updateAppMessageShareData({
				        title: ShareTit, // 分享标题
				        desc:desc , // 分享描述
				        link: ShareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				        imgUrl: ShareImg, // 分享图标
				        success: function () {
				          // 设置成功
				        }
					});
					wx.updateTimelineShareData({ 
				        title: ShareTit, // 分享标题
				        link: ShareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				        imgUrl: ShareImg, // 分享图标
				        success: function () {
				          // 设置成功
				        }
					});*/


    });
}
InitWX();
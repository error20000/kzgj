/*弹框*/
var popIsShow = false;
var popDom = null;
function OpenDialog(id) {
    closeDialog();
    var p = $('#'+id);
    popDom = p;
    if (p) {
        p.show().css({
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: -popDom.height() / 2 + 'px',
            marginLeft: -popDom.width() / 2 + 'px',
            zIndex: 998
        });
        p.attr('for', 'pop');
        popIsShow = true;
        if ($('[for="' + id + '"]').length >= 1) return;
        $('body').append('<div name="overlay" onclick="closeDialog()" for=' + id + ' style="width:100%;height:100%;position:fixed;top:0;left:0;z-index:997;background:rgba(0,0,0,0.8);"></div>');
    }
}
function closeDialog() {
    $('[for="pop"]').hide().attr('style', '');
    $('[name="overlay"]').remove();
}
/**
 * Created by Administrator on 2017/5/3.
 */
$(document).ready(function () {
    // 返回首页
    $('.return').on('touchstart',function () {
        location.href='../html/cll-home.html';
    })
    // 继续充值
    $('.continue').on('touchstart',function () {
        location.href='../html/cll-member-click.html';
    })
})
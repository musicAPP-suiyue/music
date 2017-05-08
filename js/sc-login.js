/**
 * Created by Administrator on 2017/5/5.
 */
$(document).ready(function () {
    $('.login').on('touchstart',function () {
        var name=$('.from-1 > input').val();
        var pass=$('.from-2 > input').val();
        if(name=="1078688845"&&pass=="lol7758521"){
            location.href='../html/index.html'
        }else{
            $('.cuowu-1').css('display','flex');
        }
    })
})
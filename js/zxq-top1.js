$(document).ready(function(){
	$("li a").click(function(){
//		alert(1);
		$(this).addClass("active").siblings().removeClass("active");
		console.log($(this));
	})
})
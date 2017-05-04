$(document).ready(function(){
	var search=$('.zxq-topp input');
	var mask=$('.zxq-searchmask')
	var searchcontent=$('.zxq-searchcontent')
	var submit=$('.zxq-sc')
	search.focus(function(){
		mask.slideDown(200)
	}).focusout(function(){
		mask.slideUp(200)
	}).keyup(function(){
		if(search.val()){
			searchcontent.show()
		}else{
			searchcontent.hide()
		}
	})	
	// 默认已获取焦点         
	search.focus();
	submit.on('touchstart',function(){
		searchcontent.slideUp(200);
		search.off()
		mask.slideDown(200);
		if(search.val()){
			location.href='zxq-ssxq.html'
		}else{
			location.href='zxq-fail.html'
		}		
	})
})
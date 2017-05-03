$(document).ready(function(){
	var audio=$('audio').get(0);
	$('.zxq-play2').on('click',function(){
		alert(1);
			if(audio.paused){
				audio.play();
			}else{
				audio.pause();
			}
	})
	var jindu=$('.zxq-bottom .zxq-tiao');
	var tiao=$('.zxq-bottom .zxq-ctiao');
	$('.zxq-bottom .zxq-yuan').on('click',false);
	jindu.on('click',function(e){
		audio.currentTime=audio.duration*(e.offsetX/jindu.width());
	})
	$(audio).on('timeupdate',function(){
			var w=jindu.width()*audio.currentTime/audio.duration;
			tiao.width(w);
	});
})
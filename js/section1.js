
$(function(){
	var x=0;
	
	var width=document.documentElement.clientWidth||document.body.clientWidth
	var basewidth=1300
	var differ=(width-basewidth)/(2*width)*100+'%'
	
	$('.mybox').css('left',differ)
	
	$(".nav-introduce").bind("mouseout",small).bind("mouseover",big);
	$(".nav-introduce>li").bind("mouseout",hide).bind("mouseover",show);
	$(".product-show li").bind("mouseover",move).bind("mouseout",out);
	
	setInterval(loop,4000);
	
	function move(){
		var top=$(this).position().top-58+$(this).height()+"px";
		var left=$(this).position().left+20+"px";
		var message=$(this).children()[1].innerText;
		$(".move").stop().animate({opacity:0.5,left:left,top:top},200).text(message);
	}
	
	function out(){

	}
	
	function show(){
		$(this).children().children().stop().show(200);
	}
	
	function hide(){
		$(this).children().children().stop().hide(200);
	}
	
	function big(){
		$("nav").stop().animate({height:"200px"},200);
	}

	function small(){
		$("nav").stop().animate({height:"80px"},200);
	}
	
	function loop(){
		x-=945;
		if(x==-2835){
			x=0;
		}
		var y=x+"px";
		$(".bigbox").animate({left:y,opacity:1},400).delay(2000);	
	}
	
})

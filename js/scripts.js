$(document).ready(function(){
	$('#block-distributor .row').hover(function(){
		$(this).children("img").animate({
			opacity : 0.3
		},500);	
	},function(){
	    $(this).children("img").stop().animate({
			opacity : 1
		},200);		
	});

	$(function () {
	    $('a[href*=#]:not([href=#])').click(function () {
	        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	            if (target.length) {
	                $('html,body').animate({
	                    scrollTop: target.offset().top
	                }, 1000);
	                return false;
	            }
	        }
	    });
	});
	
	var btnShow = $("#btnShow");
	btnShow.click(function(){
		$("#showMenufacturing").collapse();
		btnShow.hide();
	});
	
	var botId = $("#block-bot");
	var windowHeight = $(window).height();
	if(windowHeight > 600){
		botId.css({
			"bottom" : 0,
			"position" : "absolute",
		});	
	}
});
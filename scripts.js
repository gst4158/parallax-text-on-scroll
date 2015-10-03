    // Does stuff on load, scroll & resize
    //-------------------------------//	
	$(window).on("load scroll resize",function(e){

		// parallax translateX effect for home page
		var winHeight 	= $(window).outerHeight(),
			winWidth 	= $(window).outerWidth(),
			scrollPos	= $(window).scrollTop(),
			elmWidth	= $('.pageintro').outerWidth(),

			g = 1 * winHeight,
			i = 2.25 * winHeight,
			
			percent = (scrollPos - g) / (i - g),
			percent = winWidth - percent * elmWidth;		
	
		$('.pageintro .textwrapper').css('transform', 'translateX(' + percent + 'px) translateY(-50%)');
		$('.pageintro .textwrapper').css('-webkit-transform', 'translateX(' + percent + 'px) translateY(-50%)');
	});

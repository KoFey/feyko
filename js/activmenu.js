jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>1008){
            $('#navigation').addClass('fixed');
        }
        else if ($(this).scrollTop()<1008){
            $('#navigation').removeClass('fixed');
        }
    });
});


$(document).scroll(function(e){
	$('a[name]').each(function(a,b) {
		let item = $("a[href = '#" + b.getAttribute('name')+"']");
		if(b.offsetTop-5 < document.scrollingElement.scrollTop + 50) {
			$("#menu").find('a').removeClass("act");
			item.addClass("act");
		} else {
			item.removeClass("act");
		}
	});
});
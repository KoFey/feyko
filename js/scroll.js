let end=0;
$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
	$("#first").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
});

function btn() {
	$('body,html').animate({
		scrollTop: $('div[id=drop_me]').offset().top
	},1500);
}

$(document).ready(function() {
	$('a[class="up"]').on("click", function(event) {
		event.preventDefault();
		console.log($('div[id=home]'));
		$("body,html").animate({
			scrollTop: $('section[id=home]').offset().top
		},1500);
	});
});

$(document).scroll(function(e) {
	if(document.scrollingElement.scrollTop > 200) {
		$('div[id=vision]').css("opacity","1");
		$('.up').css("cursor","pointer");
	} else {
		$('div[id=vision]').css("opacity","0");
		$('.up').css("cursor","default");
	}
});

$(document).scroll(function(e) {
	if(document.scrollingElement.scrollTop+$(window).height() - $('#skills').offset().top>=0&&end==0) {
		anima("html");
		anima("css");
		anima("C");
		anima("prolog");
		end++;
	}
});

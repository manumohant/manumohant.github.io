$( function() {
	$.vegas('slideshow', {
		backgrounds:[
			{ src:'img/background.jpg', fade:4000 },
			{ src:'img/background_0.jpg', fade:4000 },
			{ src:'img/background_1.jpg', fade:4000 },
			{ src:'img/background_2.jpg', fade:4000 },
			{ src:'img/background_3.jpg', fade:4000 },
			{ src:'img/background_4.jpg', fade:4000 },
			{ src:'img/background_5.jpg', fade:4000 }
		]
		})('overlay'), {
			src:'img/overlays/1.png'
		};
});
$(document).ready(function() { 
	$(".content").css("display", "none");
	$(".content").fadeIn(2000);
});

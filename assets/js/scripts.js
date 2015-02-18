$(document).ready(function() {
	setTimeout(function() {
		$('.video-content-wrapper').velocity({
			height: 140
		}, {
			duration: 600,
			easing: 'easeInSine'
		});
	}, 500);

	setTimeout(function() {
		$('.video-content-wrapper iframe').velocity({
			opacity: 1
		}, {
			duration: 600
		});
	}, 1100);

	setTimeout(function() {
		$('.ad-cover').velocity({ 
		    opacity: 0
		}, {
		    duration: 1000,
		});    
	}, 1500);

	setTimeout(function() {
		$('.cta').velocity({
			height: 117
		}, {
			duration: 600,
		});
	}, 2250);

	setTimeout(function() {
		$('.old-spice-logo').velocity({
			opacity: 1
		}, {
			duration: 1000,
			easing: 'easeInSine'
		});
	}, 2750);

	setTimeout(function() {
		$('.palm-trees').velocity({
			rotateY: "3deg",
			// rotateX: ".075deg"
			translateX: ".075rem"
			// translateY: ".075rem"
		}, {
 			loop: 15		
 		});
	}, 2750);
});
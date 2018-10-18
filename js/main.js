$(function () {
	//smooth scrolling
	$('a').on('click', function(event) {
		
		if (this.hash !== "") {
			event.preventDefault();

			let hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				
				window.location.hash = hash;
			});
    } // End if
  });
});
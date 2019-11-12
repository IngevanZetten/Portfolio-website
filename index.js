
var skillList = document.querySelectorAll(".skill");

function fillBar(nummer){	

	var startWidth = 0;

	var id  = setInterval(function(){

		var width = skillList[nummer].innerHTML;

		startWidth += 1;

		skillList[nummer].style.width = startWidth + '%';

		if(startWidth + "%" === width){
			clearInterval(id);
		}


	}, 10);

}


var intersectionOptions = {
  root: null,  // use the viewport
  rootMargin: '0px',
  threshold: 1.0
}

function intersectionCallback(entries, observer) {
	entries.forEach(entry => {
		if (entry.intersectionRatio >= 1) {
			console.log("Fully visible!");
			for(var i = 0; i < skillList.length; i++){

				fillBar(i);

			}


		} else {
			console.log("Not fully visible!");
		}
	});
}

var observer = new IntersectionObserver(intersectionCallback, intersectionOptions);

var target = document.querySelectorAll('.skill')[0];
observer.observe(target);

//elementen ophalen met class '.animation-element'
var $animation_elements = $(".animation-element");
var $window = $(window);


function check_in_view(){
	//variabele voor hoogte scherm
	var window_height = $window.height();
	//variabele voor top positie van scherm 
	var window_top_position = $window.scrollTop();
	//uitrekenen van positie onderkant scherm 
	var window_bottom_position = (window_top_position + window_height);

	//loop door elementen die geanimeerd moeten worden en kijk of ze zichtbaar zijn
	$.each($animation_elements, function(){
		var $element = $(this);
		//hoogte van element
		var element_height = $element.outerHeight();
		//top positie van element
		var element_top_position = $element.offset().top;
		//positie onderkant element berekenen
		var element_bottom_position = (element_top_position + element_height);

		//check of element in beeld is
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
			$element.addClass("in-view");
		}else{
			$element.removeClass("in-view");
		}

	});

}

//listener toevoegen aan window
$window.on("scroll resize", check_in_view);

$window.trigger("scroll");

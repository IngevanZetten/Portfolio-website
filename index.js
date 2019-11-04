
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



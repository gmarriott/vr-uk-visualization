(function(){

	"use strict";
	
	var scene = document.querySelector('a-scene');

	rawData.forEach(addColumn);

	setTimeout(function(){
		var cylinders = document.querySelectorAll('a-cylinder')
		cylinders.forEach(function(element){element.emit('displayGraph');});		
	}, 4000);

	function addColumn(dataElement){
		var cylinder = document.createElement('a-cylinder'),
		columnRadius = 0.05;

		cylinder.setAttribute('geometry', {
			radius: columnRadius,
			height: dataElement.height
		});
		
		cylinder.setAttribute('position', {
			x: dataElement.x,
			y: dataElement.height/2,
			z: dataElement.z
		});	

		cylinder.setAttribute('opacity', 0);
		cylinder.setAttribute('material', 'transparent: true; color: ' + dataElement.color);
		cylinder.setAttribute('animation', 'property: opacity; to: 1; startEvents: displayGraph; easing: easeInSine;');

		scene.appendChild(cylinder);
	}
	
})();


AFRAME.registerComponent('show-graph', {  
	init() {

		this.el.addEventListener('click', () => {
			console.log("clicked")

			RenderChartUsingD3();
			
						
		});

		function RenderChartUsingD3(){
			console.log("render")
			document.getElementById('chartBars').innerHTML='';

			var chart = d3.select("#chartBars")
				.selectAll()
				.data(chartData)
				.enter()
				.append("div")
				.classed("bar-container", true)
				.append("div")
				.classed("bar", true)
				.style("background-color", function(d) { return d.color })
				.style("width", function(d) { return d.value + "%"; })
				.text(function(d) { return d.name; });
			
		
				document.getElementById('chartPlaneWrapper').setAttribute('visible', true);
			// var animationDetails = 'property: position; startEvents: changeDisplay; to: 0 8 8 dur: 2000';
			// // document.getElementById('chartPlaneWrapper').setAttribute('visible', 'true');
			// document.getElementById('chartPlaneWrapper').setAttribute('animation',  animationDetails);
			// document.getElementById('chartPlaneWrapper').emit('changeDisplay');	
		
		}

	}
});	


AFRAME.registerComponent('hide-graph', {  
	init() {
        this.el.addEventListener('click', () => { 
				document.getElementById('chartPlaneWrapper').setAttribute('visible', false);
		 });
    }
});
AFRAME.registerComponent('show-graph', {  
	init() {
		this.el.addEventListener('click', () => {
			document.getElementById('chartPlaneWrapper').setAttribute('visible', true);
		});
	}
});	
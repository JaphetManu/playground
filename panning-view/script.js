const gallery = document.getElementById('gallery');
const shapes = document.querySelectorAll('.shape');
let panelExpanded = false;

window.onmousemove = (e) => {
	if (!panelExpanded) {
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		const xDecimal = mouseX / window.innerWidth,
			yDecimal = mouseY / window.innerHeight;

		const maxX = gallery.offsetWidth - window.innerWidth,
			maxY = gallery.offsetHeight - window.innerHeight;

		const panX = maxX * xDecimal * -1,
			panY = maxY * yDecimal * -1;

		gallery.animate(
			{
				transform: `translate(${panX}px, ${panY}px)`,
			},
			{
				duration: 6000,
				fill: 'forwards',
				easing: 'ease',
			}
		);
	}
};

shapes.forEach((shape) => {
	shape.addEventListener('click', (e) => {
		panelExpanded = true;
		console.log('listener 1');
		console.log(panelExpanded);
		shape.classList.add('expanded');

		gallery.animate(
			{
				transform: `translate(${shape.offsetWidth - shape.clientWidth}px, ${
					shape.offsetHeight - shape.clientHeight
				}px)`,
			},
			{
				duration: 1000,
				fill: 'forwards',
				easing: 'ease',
			}
		);

		shape.querySelector('.close-icon').addEventListener('click', (e) => {
			e.stopPropagation();
			shape.classList.remove('expanded');
			setTimeout(() => (panelExpanded = false), 800);
		});
	});
});

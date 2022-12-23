const gallery = document.getElementById('gallery');
const shapes = document.querySelectorAll('.shape');
let panelExpanded = false;

shapes.forEach((shape) => {
	shape.addEventListener('click', () => {
		panelExpanded = true;
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
	});
});

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

const leftParallax = document.querySelector('.parallax-left');
const rightParallax = document.querySelector('.parallax-right');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			startParallaxEffect();
		}
	});
});

observer.observe(rightParallax);
observer.observe(leftParallax);

function startParallaxEffect() {
	document.addEventListener('scroll', () => {
		leftParallax.animate(
			{
				transform: `translateX(${window.pageYOffset / 100}%)`,
			},
			{
				fill: 'forwards',
				easing: 'ease',
			}
		);

		rightParallax.animate(
			{
				transform: `translateX(${-((window.pageYOffset / 100) * 1.5)}%)`,
			},
			{
				fill: 'forwards',
				easing: 'ease',
			}
		);
	});
}

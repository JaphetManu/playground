const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const btnIndex = btn.dataset.carouselButton;
		const slides = document.querySelectorAll('[data-slide-index]');
		const activeSlide = document.querySelector('[data-active]');

		if (activeSlide.dataset.slideIndex !== btn.dataset.carouselButton) {
			const newActiveSlide = [...slides].filter((slide) => slide.dataset.slideIndex === btnIndex)[0];
			newActiveSlide.dataset.active = true;

			delete activeSlide.dataset.active;
		}
	});
});

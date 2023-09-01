const buttons = document.querySelectorAll('[data-carousel-button]');

const slides = document.querySelectorAll('[data-slide-index]');
const prevBtn = document.querySelector('.btn-prev-slide');
const nextBtn = document.querySelector('.btn-next-slide');

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

prevBtn.addEventListener('click', () => {
	let newActiveSlide;
	const activeSlide = document.querySelector('[data-active]');

	if (activeSlide.dataset.slideIndex === '0') {
		newActiveSlide = [...slides][slides.length - 1];
	} else {
		console.log(activeSlide.dataset.slideIndex);
		const currIndex = parseInt(activeSlide.dataset.slideIndex);
		newActiveSlide = [...slides].filter((slide) => slide.dataset.slideIndex === (currIndex - 1).toString())[0];
	}

	newActiveSlide.dataset.active = true;
	delete activeSlide.dataset.active;
});

nextBtn.addEventListener('click', () => {
	let newActiveSlide;
	const activeSlide = document.querySelector('[data-active]');

	if (activeSlide.dataset.slideIndex === (slides.length - 1).toString()) {
		newActiveSlide = [...slides][0];
	} else {
		const currIndex = parseInt(activeSlide.dataset.slideIndex);
		newActiveSlide = [...slides].filter((slide) => slide.dataset.slideIndex === (currIndex + 1).toString())[0];
	}

	activeSlide.classList.add('exit');

	setTimeout(() => {
		newActiveSlide.dataset.active = true;
	}, 500);

	setTimeout(() => {
		activeSlide.classList.remove('exit');
		delete activeSlide.dataset.active;
	}, 1500);
});

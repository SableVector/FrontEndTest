window.addEventListener('DOMContentLoaded', () => {

	const tabsList = document.querySelector('.tabs-trigers__list');
	const tabTrigers = document.querySelectorAll('.tabs-trigers__item-btn');
	const contents = document.querySelectorAll('.tabs-content__item');

	console.log(tabTrigers);

	const removeContent = () => {
		for (const content of contents) {
			content.style.display = 'none';
		}

		for (const tabTriger of tabTrigers) {
			tabTriger.classList.remove('tabs-trigers__item-btn--active');
		}
	};

	const addContent = (i = 0) => {
		contents[i].style.display = 'block';
		tabTrigers[i].classList.add('tabs-trigers__item-btn--active');
	};


	tabsList.addEventListener('click', e => {
		const target = e.target;

		if (target && target.tagName == 'BUTTON') {
			tabTrigers.forEach((item, i) => {
				if (target === item) {
					removeContent();
					addContent(i);
				}
			});
		}

	});

	removeContent();
	addContent();

});



































// import Slider from './modules/slider';

// window.addEventListener('DOMContentLoaded', () => {

//     const slider = new Slider('.page', '.next');
//     slider.render();

// });
window.addEventListener('DOMContentLoaded', () => {

	const tabsList = document.querySelector('.tabs__list');

	tabsList.addEventListener('click', e => {
		const target = e.target;
		const btns = document.querySelectorAll('.tabs__item-btn');

		if (target && target.tagName == 'BUTTON') {
			btns.forEach(btn => {
				btn.classList.remove('tabs__item-btn--active');
			});

			target.classList.add('tabs__item-btn--active');
		}

	});

});



































// import Slider from './modules/slider';

// window.addEventListener('DOMContentLoaded', () => {

//     const slider = new Slider('.page', '.next');
//     slider.render();

// });
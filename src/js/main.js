window.addEventListener('DOMContentLoaded', () => {

	const tabsList = document.querySelector('.tabs-trigers__list');
	const tabTrigers = document.querySelectorAll('.tabs-trigers__item-btn');
	const contents = document.querySelectorAll('.tabs-content__item');

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


	// window.onscroll = function showRightPanel () {
	// 	const header = document.querySelector('.content-right');
	// 	if(window.pageYOffset > 200) {
	// 		header.classList.add('fixed');
	// 	};
	// }

	const contentRight = document.querySelector('.content-right');
	const header = document.querySelector('.header');
	const contentLeft = document.querySelector('.content-left');


	// window.addEventListener('scroll', () => {
	// 	if (window.scrollY >= header.offsetHeight) {
	// 		contentRight.style.cssText = `
	// 			position: sticky;
	// 			top: 15px;
	// 		`;
	// 		// contentLeft.style.paddingRight = contentRight.offsetWidth + 'px';
	// 		// contentLeft.style.marginRight = '0px';
	// 	} else {
	// 		contentRight.style.cssText = `
	// 		position: '';
	// 		top: '';
	// 		right: '';
	// 		`;
	// 		// contentLeft.style.paddingRight = '';
	// 		// contentLeft.style.marginRight = '';
	// 	}

	// });

});



































// import Slider from './modules/slider';

// window.addEventListener('DOMContentLoaded', () => {

//     const slider = new Slider('.page', '.next');
//     slider.render();

// });
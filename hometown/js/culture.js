// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">文化基因</span>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		intros: [
			{id: 1, img: 'intro-backgroud-img-food', en: 'intro-text-color-MidnightBlue-en', cn: 'intro-text-color-SlateBlue-cn', texten: 'Food', textcn: '食系茂名', url: 'food.html', btntext: '特产'},			
			{id: 2, img: 'intro-backgroud-img-tradition', en: 'intro-text-color-MidnightBlue-en', cn: 'intro-text-color-SlateBlue-cn', texten: 'Tradition', textcn: '传统习俗', url: 'tradition.html', btntext: '习俗'}
		]
	},
	components: {
		intro: intro
	}
});

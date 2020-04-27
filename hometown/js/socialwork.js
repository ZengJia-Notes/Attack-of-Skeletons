// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">社会事业</span>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		intros: [
			{id: 1, img: 'intro-backgroud-img-food', en: 'intro-text-color-Golden-en', cn: 'intro-text-color-LightGolden-cn', texten: 'Economy', textcn: '经济产业', url: 'eco.html', btntext: '经济'},			
			{id: 2, img: 'intro-backgroud-img-poi', en: 'intro-text-color-Golden-en', cn: 'intro-text-color-LightGolden-cn', texten: 'Education', textcn: '教育事业', url: 'edu.html', btntext: '教育'}
		]
	},
	components: {
		intro: intro
	}
});

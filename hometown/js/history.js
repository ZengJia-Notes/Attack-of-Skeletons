// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">历史记忆</span>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		intros: [
			{id: 1, img: 'intro-backgroud-img-figure', en: 'intro-text-color-Firebrick-en', cn: 'intro-text-color-DarkGoldenrod-cn', texten: 'Figure', textcn: '历史名家', url: 'figure.html', btntext: '名家'},	
			{id: 2, img: 'intro-backgroud-img-poi', en: 'intro-text-color-Firebrick-en', cn: 'intro-text-color-DarkGoldenrod-cn', texten: 'Poi', textcn: '名胜遗迹', url: 'poi.html', btntext: '名胜'}
		]
	},
	components: {
		intro: intro
	}
});

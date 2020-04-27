// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">概览</span>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content'
});

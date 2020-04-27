// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">传统习俗</span>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		pois: [
			{id: 1, name: '做年例睇大戏', intro: '元旦恭贺，曰拜年。家设糕果祭神，曰供养。或悬先像，设糕果礼拜。是日，不杀牲，多素食，三日内不市。各乡行春傩礼演戏，曰做年例。', url: 'lib/ninali.jpg'},
			{id: 2, name: '正穷节吃艾籺', intro: '农历正月最后一天又称为“正穷节”也叫“征穷节”，中国传统节日之一。即正月结束的意思。在高州 “正穷节”还有另一层含义，因本地“正”与“蒸”同音，“正穷”即“蒸穷”，是将穷苦病患从人世间“蒸发掉”的意思。在这一天，高州民间有饮艾茶、插艾花、吃艾籺的习俗。', url: 'lib/zhengqiong.jpg'},
			{id: 3, name: '祭荔枝神', intro: '祭荔枝神先定吉日。单户的各自在自家做籺，加菜并邀亲戚朋友饮自家酿的荔枝酒，饮罢，带祭品特别是要有荔枝酒去自种的荔枝树下拜祭。拜祭完毕，燃鞭炮，锣鼓喧天，跳傩舞。集体的，人们拣一条丰产，“功劳”最大的荔枝树下作祭坛，八仙桌上摆上从各家各户送来的三牲祭品和荔枝酒，请道公喃斋。晚上在荔枝园附近做木偶戏。', url: 'lib/jilizhishen.jpg'}	
		]
	},
	components: {
		poi: poi
	}
});

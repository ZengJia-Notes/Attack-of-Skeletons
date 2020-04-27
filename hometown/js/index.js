// JavaScript Document

var app_content = new Vue({
	el: '#content',
	data: {
		intros: [
			{id: 1, img: 'intro-backgroud-img-overview', en: 'intro-text-color-Blue-en', cn: 'intro-text-color-Blue-cn', texten: 'Overview', textcn: '概览', url: 'overview.html', btntext: '更多'},			
			{id: 2, img: 'intro-backgroud-img-socialwork', en: 'intro-text-color-Golden-en', cn: 'intro-text-color-LightGolden-cn', texten: 'Socialwork', textcn: '社会事业', url: 'socialwork.html', btntext: '更多'},
			{id: 3, img: 'intro-backgroud-img-culture', en: 'intro-text-color-MidnightBlue-en', cn: 'intro-text-color-SlateBlue-cn', texten: 'Culture', textcn: '文化基因', url: 'culture.html', btntext: '更多'},			
			{id: 4, img: 'intro-backgroud-img-history', en: 'intro-text-color-Firebrick-en', cn: 'intro-text-color-DarkGoldenrod-cn', texten: 'History', textcn: '历史记忆', url: 'history.html', btntext: '更多'},
			{id: 5, img: 'intro-backgroud-img-map', en: 'intro-text-color-Blue-en', cn: 'intro-text-color-Blue-cn', texten: 'Map', textcn: '地理位置', url: 'geo.html', btntext: '更多'},
			{id: 6, img: 'intro-backgroud-img-bbs', en: 'intro-text-color-Golden-en', cn: 'intro-text-color-LightGolden-cn', texten: 'BBS', textcn: '论坛', url: 'bbs.html', btntext: '更多'}
		]
	},
	components: {
		intro: intro
	}
});

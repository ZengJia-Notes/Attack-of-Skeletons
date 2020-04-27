// JavaScript Document

var PageManagement = function () {
	this.Pages = {
		index: false,
		overview: false,
		socialwork: false,		
		eco: false,
		edu: false,
		culture: false,
		food: false,
		tradition: false,
		history: false,
		figure: false,
		poi: false,
		geo: false,
		bbs: false
	};
	this.Names = {
		index: '主页',
		overview: '概览',
		socialwork: '社会事业',		
		eco: '经济产业',
		edu: '教育事业',
		culture: '文化基因',
		food: '食系茂名',
		tradition: '传统习俗',
		history: '历史记忆',
		figure: '历史名家',
		poi: '遗迹名胜',
		geo: '地理位置',
		bbs: 'BBS'
	}
	this.init = function () {
		let url = window.location.href;
		let index1 = url.lastIndexOf("\/");
		let index2 = url.indexOf(".html");
		let page = url.substring(index1+1, index2);
		this.Pages[page] = true;
		switch (page) {
			case 'eco':
			case 'edu':
				this.Pages['socialwork'] = true;
				break;
			case 'food':
			case 'tradition':
				this.Pages['culture'] = true;
				break;
			case 'figure':
			case 'poi':
				this.Pages['history'] = true;
		}
	}
}

var pm = new PageManagement();
pm.init();

Vue.component('globalnav', {
	data: function () {
		let isActive = {
			'overview': pm.Pages['overview'],
			'socialwork': pm.Pages['socialwork'],
			'culture': pm.Pages['culture'],
			'history': pm.Pages['history'],
		};
		let noFixedPages = {
			'eco': pm.Pages['eco'],
			'edu': pm.Pages['edu'],
			'food': pm.Pages['food'],
			'tradition': pm.Pages['tradition'],
			'figure': pm.Pages['figure'],
			'poi': pm.Pages['poi'],
			'bbs': pm.Pages['bbs']
		};
		let isFixed = false;
		for (var key in noFixedPages) {
			isFixed = isFixed || noFixedPages[key];
		}
		isFixed = !isFixed;
		return {
			isActive: isActive,
			isFixed: isFixed,
			isOpacity: false
		}
	},
	mounted: function () {
		window.addEventListener('scroll', this.opacityProc, true);
	},
	methods: {
		getScrollTop: function () {
			return document.documentElement.scrollTop;
		},
		opacityProc: function () {
			if (this.getScrollTop() > 104) {
				this.isOpacity =  true;
			} else {
				this.isOpacity = false;
			}
		},
		getFocus: function () {
			this.isOpacity = false;
		},
		loseFocus: function () {
			if (this.getScrollTop() == 0)
				this.isOpacity = false;
			else {
				this.isOpacity = true;
			}
		}
	},
  	template: `
		<div v-bind:class="[{'gn-fixed': isFixed}, {'gn-opacity': isOpacity},'gn']" @mouseenter="getFocus" @mouseleave="loseFocus">
			<nav class="gn-list">
				<li class="gn-item gn-index"><a class="gn-link" href="index.html"><span class="gn-link-text">myHometownMaoming-link</span></a></li>
				<li class="gn-item"><a href="overview.html" v-bind:class="[{'gn-link-active': isActive['overview']}, 'gn-link']">概览</a></li>
				<li class="gn-item"><a href="socialwork.html" v-bind:class="[{'gn-link-active': isActive['socialwork']}, 'gn-link']">社会事业</a></li>
				<li class="gn-item"><a href="culture.html" v-bind:class="[{'gn-link-active': isActive['culture']}, 'gn-link']">文化基因</a></li>
				<li class="gn-item"><a href="history.html" v-bind:class="[{'gn-link-active': isActive['history']}, 'gn-link']">历史记忆</a></li>
				<li class="gn-item gn-geo"><a class="gn-link" href="geo.html"><span class="gn-link-text">geo-link</span></a></li>
				<li class="gn-item gn-bbs"><a class="gn-link" href="bbs.html"><span class="gn-link-text">BBS-link</span></a></li>
			</nav>
		</div>
  	`
});

var breadcrumbs = {
	data: function () {
		let seen = true;
		let shown = true;
		let path = [];
		let page_path = [];
		let en = false;
		for (var key in pm.Pages) {
			if (pm.Pages[key]) {
				path.push(pm.Names[key]);
				page_path.push('./' + key + '.html');
			}
		}
		if (path[0] == '主页') {
			path.splice(0, 1);
			seen = false;
		}
		if (path[0] == 'BBS') {
			en = true;
		}
		if (path.length == 1) {
			shown = false;
			page_path = null;
		} else {
			page_path = page_path[0];
		}
		return {
			seen: seen,
			shown: shown,		
			path: path,
			page_path: page_path,
			en: en
		}
	},
	template: `
		<ul class="bc-list" v-if="seen">
			<li class="bc-item bc-index"><a class="bc-link" href="index.html"><span class="bc-link-text">index</span></a></li>
			<li class="bc-item">&nbsp;&gt;&nbsp;<a class="bc-link" v-bind:href="page_path" v-bind:class="{'bc-link-active': shown, 'bc-en': en}">{{path[0]}}</a></li>
			<li class="bc-item" v-if="shown">&nbsp;&gt;&nbsp;<a class="bc-link">{{path[1]}}</a></li>
		</ul>
		`
};

Vue.component('globalft', {
	data: function () {
		let isIndex = pm.Pages['index'];
		return {
			isIndex: isIndex
		}
	},
	components: {
		'breadcrumbs': breadcrumbs
	},
  	template: `
		<footer class="gf">
			<breadcrumbs></breadcrumbs>
			<ul v-bind:class="[{'gf-directory-padding-top': isIndex}, 'gf-directory']">
				<ul class="gf-dir-list">
					<li class="gf-dir-item"><span class="gf-dir-text">探索茂名</span></li>
					<li class="gf-dir-item"><a class="gf-link" href="overview.html">概览</a></li>
					<li class="gf-dir-item"><a class="gf-link" href="socialwork.html">社会事业</a></li>
					<li class="gf-dir-item"><a class="gf-link" href="culture.html">文化基因</a></li>
					<li class="gf-dir-item"><a class="gf-link" href="history.html">历史记忆</a></li>
				</ul>
				<ul class="gf-dir-list">
					<li class="gf-dir-item"><span class="gf-dir-text">地图标记</span></li>
					<li class="gf-dir-item"><a class="gf-link" href="geo.html">地理位置</a></li>
				</ul>
				<ul class="gf-dir-list">
					<li class="gf-dir-item"><span class="gf-dir-text">论坛交流</span></li>
					<li class="gf-dir-item"><a class="gf-link gf-en" href="bbs.html">BBS</a></li>
				</ul>
			</ul>
			<hr class="gf-hr"/>
			<address class="gf-addr">
				<span class="gf-mail">联系开发者：&nbsp;<a class="gf-mail-link gf-en" href="mailto:2369798299@qq.com">2369798299@qq.com</a>
				</span>
				<span class="gf-author gf-en">Developer:&nbsp;&nbsp;&nbsp;&nbsp;<a class="gf-author-text">ZengJia</a>
				&nbsp;</span>
			</address>
		</footer>
  	`
});

var app_nav = new Vue({
	el: '#globalnav'
});

var app_ft = new Vue({
	el: '#globalft'
});
// JavaScript Document

Vue.component('headline', {
	data: function () {
		return {
			isFixed: false
		}
	},
	mounted: function () {
		window.addEventListener('scroll', this.fixedProc, true);
	},
	methods: {
		submit: function () {
			let input_text = document.getElementsByClassName("comment-input-text")[0];
			let text = input_text.value;
			if (text != "") {
				let posts = app_content.posts;
				let id = 1;
				if (posts.length != 0) {
					id = posts[0].id + 1;
				}
				let post = {id: id, text: text, msg: returnCitySN["cip"] + ' ' + returnCitySN["cname"] + ' ' + new Date().toLocaleString()};
				posts.splice(0, 0, post);
				input_text.value = "";
				let inborder = document.getElementsByClassName("cm-inborder")[0];
				if (inborder.scrollTop > 10) {
					this.scrollToTop(inborder);
				}
				if (this.getScrollTop() > 0) {
					this.scrollToTop(document.documentElement);
				}
				app_content.setPostsCookie();
			}
		},
		scrollToTop: function (box) {
			box.scrollTop = box.scrollTop - 10;
			if (box.scrollTop > 0) {
				var c = setTimeout(()=>this.scrollToTop(box), 10);
			} else {
				clearTimeout(c);
			}
		},
		getScrollTop: function () {
			return document.documentElement.scrollTop;
		},
		fixedProc: function () {
			if (this.getScrollTop() > 100) {
				this.isFixed =  true;
			} else {
				this.isFixed = false;
			}
		}
	},
	template: `
		<div v-bind:class="[{'gh-fixed': isFixed},'gh']">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">论坛</span>
					<input class="comment-input-text" type="text" placeholder="我也说一句……" @keyup.enter="submit"></input>
					<button class="comment-submit-btn" @click="submit">发表</button>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		posts: [
			{id: 2, text: "化州仔前来报到！😋", msg: "ZengJia 2019/06/22 19:30"},
			{id: 1, text: "我❤茂名", msg: "ZengJia 2019/06/22 19:30"}
		]
	},
	components: {
		comment: comment
	},
	mounted: function () {
		this.checkCookie();
	},
	methods: {
		setCookie: function (id, val, exdays) {
			let time = new Date();
			time.setTime(time.getTime() + (exdays*24*60*60*1000));
			let expires = "expires=" + time.toGMTString();
			path = "path=/";
			document.cookie = id + "=" + val + "; " + expires + "; " + path;
		},
		getCookie: function (id) {
			let cookieId = id + "=";
			let cookieAry = document.cookie.split(";");
			for (let i = 0; i < cookieAry.length; i = i + 1) {
				let cookie = cookieAry[i].trim();
				if (cookie.indexOf(cookieId) == 0) {
					return cookie.substring(cookieId.length, cookie.length);
				}
				return "";
			}
		},
		checkCookie: function () {
			let posts = this.getCookie("posts");
			if (posts != "") {
				this.posts = JSON.parse(posts);
			} else {
				console.log("none");
			}
		},
		setPostsCookie: function () {
			let postsString = JSON.stringify(this.posts);
			this.setCookie("posts", postsString, 10);
		}
	}
});

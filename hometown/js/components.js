// JavaScript Document

var comment = {
	data: function () {
		isHere = false;
		isAllChosen = false;
		blue = "全选";
		return {
			isHere: isHere,
			isAllChosen: isAllChosen,
			blue: blue
		}
	},
	props: ['post'],
	methods: {
		enableBtn: function () {
			this.isHere = true;
		},
		disabledBtn: function () {
			this.isHere = false;
			this.isAllChosen = false;
		},
		selectAll: function () {
			this.isAllChosen = !this.isAllChosen;
		},
		drop: function () {
			let posts = app_content.posts;			
			if (this.isAllChosen) {
				posts.splice(0, posts.length);
			}
			else {
				let index = 0;
				for (var i = 0; i < posts.length; i = i + 1) {
					if (posts[i].id == this.post.id) {
						index = i;
						break;
					}
				}
				posts.splice(index,1);		
			}
			app_content.setPostsCookie();
		}
	},
	template: `
		<div class="comment" @mouseenter="enableBtn" @mouseleave="disabledBtn">
			<div class="bubble" v-bind:title="post.msg">{{post.text}}<em></em><span></span></div>
			<div>
			<div class="btn-box">
				<transition name="btn-active">
					<button class="btn blue-btn" v-if="isHere" @click="selectAll">{{isAllChosen ? '取消全选' : '全选'}}</button>
				</transition>
				<transition name="btn-active">
					<button class="btn red-btn" v-if="isHere" @click="drop">{{isAllChosen ? '删除全部' : '删除'}}</button>
				</transition>
			</div></div>
		</div>
	`
}

var figure_img = {
	props: ['figure'],
	template: `
		<div class="figure">
			<div class="figure-border">
				<div class="figure-img-box">
					<transition appear appear-class="figure-img-appear" appear-active-class="figure-img-appear-active">
						<img class="figure-img" v-bind:src="figure.img" alt="图片施工中……"/>
					</transition>
				</div>
				<transition appear appear-class="figure-text-box-appear" appear-active-class="figure-text-box-appear-active">
					<div class="figure-text-box">
						<div class="figure-text-name">{{figure.name}}</div>
						<div class="figure-text-status">{{figure.status}}</div>
						<div class="figure-text-word">
						<div class="figure-text-word-msg">{{figure.wordMsg}}</div>
						<div class="figure-text-word-from">{{figure.wordFrom}}</div>
						</div>
						<div class="figure-text-intro">{{figure.intro}}</div>
					</div>
				</transition>
			</div>
		</div>
	`
}

var food = {
	props: ['food'],
	template: `
		<div class="food">
			<div class="food-border">
				<div class="food-box">
					<div v-bind:class="[{'food-leftbox': food.pos1}, {'food-rightbox': !food.pos1}]">
						<div class="food-text-head">{{food.name}}</div>
						<div class="food-text-content">{{food.text1}}</div>
					</div>
					<transition appear appear-class="food-img-appear" appear-active-class="food-img-appear-active">
						<img v-bind:class="['food-img', 'food-img-up', {'food-leftbox': !food.pos1}, {'food-rightbox': food.pos1}]" v-bind:src="food.img1" alt="图片施工中……"/>
					</transition>
				</div>
				<div class="food-box">
					<div v-bind:class="[{'food-leftbox': !food.pos2}, {'food-rightbox': food.pos2}]">
						<div class="food-text-subhead">{{food.text2}}</div>
						<div class="food-text-content">{{food.text3}}</div>			
					</div>
					<transition appear appear-class="food-img-appear" appear-active-class="food-img-appear-active">
						<img v-bind:class="['food-img', 'food-img-bottom', {'food-leftbox': food.pos2}, {'food-rightbox': !food.pos2}]" v-bind:src="food.img2" alt="图片施工中……"/>
					</transition>
				</div>
				<div class="food-btn-box">
					<a v-bind:href="food.url" target="_blank"><button class="food-btn">了解做法</button></a>
					<hr class="food-hr"/>				
				</div>
			</div>
		</div>
	`
}

var poi = {
	props: ['poi'],
	template: `
		<div class="poi">
			<div class="poi-border">
				<div class="poi-img-box">
					<transition appear appear-class="poi-img-appear" appear-active-class="poi-img-appear-active">
						<img class="poi-img" v-bind:src="poi.url" alt="图片施工中……"/>
					</transition>
				</div>
				<transition appear appear-class="poi-text-box-appear" appear-active-class="poi-text-box-appear-active">
					<div class="poi-text-box">
						<div class="poi-text-name">{{poi.name}}</div>
						<div class="poi-text-intro">{{poi.intro}}</div>
					</div>
				</transition>
			</div>
		</div>
	`
}

var intro = {
	props: ['intro'],
	template: `
		<transition appear appear-class="intro-appear" appear-active-class="intro-appear-active">
			<div class="intro">
				<div class="intro-border">
					<div v-bind:class="['intro-background', intro.img]"></div>
					<div class="intro-content">
						<div v-bind:class="['intro-firstLetter', intro.en]">{{intro.texten[0]}}</div>
						<div class="intro-CH-letters-box">
							<div v-bind:class="['intro-CH', intro.cn]">{{intro.textcn}}</div>
							<div v-bind:class="['intro-letters', intro.en]">{{intro.texten.slice(1)}}</div>
						</div>
					</div>
					<div class="intro-btn-box">
						<a v-bind:href="intro.url"><button class="intro-btn">了解{{intro.btntext}}</button></a>		
					</div>
				</div>
			</div>
		</transition>
	`
}
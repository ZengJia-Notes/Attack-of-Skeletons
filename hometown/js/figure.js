// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">历史名家</span>
					<div class="figure-head-box">
						<div class="figure-head-text">江山代有才人出,各领风骚数百年</div>
						<div class="figure-head-text figure-head-text-right">古往今来，人杰地灵的茂名，孕育出了他们！</div>
					</div>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		figures: [
			{id: 1, name: '潘茂名', status: '炼丹术师 290-373', wordMsg: '“潘茂名炼丹之水，味甚香美，煎茶试之，与诸水异。”', wordFrom: '——《太平寰宇记》', intro: '潘茂名，粤西之潘仙。生于西晋太熙元年，东晋宁康元年逝世，享年83岁。今属茂名高州市人，世居浮山岭附近山村。其炼丹术，发展了早期粤西地区的道家医学，重视道教的“外丹”，认为人是天地阴阳冲和之气形成。其文化思想逐渐演化成岭南潘茂名文化，如今茂名市名字的由来皆因此人。', img: 'lib/panmaoming.jpg'},
			{id: 2, name: '冼夫人', status: '巾帼英雄 522-602', wordMsg: '“我国历史上第一位巾帼英雄”', wordFrom: '——周恩来', intro: '冼夫人，又称冼太夫人、谯国夫人，原名冼英，古高凉人，今属广东茂名人。自幼追随父兄逞勇斗狠，颇有男儿气概。嫁给五胡北燕后裔冯宝，婚后与丈夫共同执政。身历三朝，是梁、陈、隋三朝时期两广地区的俚族女首领，致力于维护国家统一和民族团结，是爱国主义典范。', img: 'lib/xianfuren.jpg'},
			{id: 3, name: '冯盎', status: '岭南大将 ？-646', wordMsg: '“盎少有武略”', wordFrom: '——《旧唐书》', intro: '冯盎，字明远，生于高州良德，今属广东高州人。年少有谋略，英勇善战，隋朝开皇年间，平定叛乱，升迁左武卫大将军。隋灭亡后，冯盎集聚民心，自任首领，统帅部众五万人，占领岭南，后归顺唐朝，因治理有方，岭南局势稳定，社会安宁。', img: 'lib/fengang.jpg'},
			{id: 4, name: '高力士', status: '唐代宦官 684-762', wordMsg: '“高力士真忠臣也，谁谓阉宦无人”', wordFrom: '——李贽', intro: '高力士，潘州人。长寿二年因岭南流人谋反案年幼被阉割，与同类金刚二人于圣历元年被岭南讨击使进奉入宫，武则天赏其聪慧机敏、年幼仪美，让他在身边供奉，后因小过，被鞭打出宫。一年后，武则天复召其入宫，隶属司宫台，官府供给粮食。景龙年间，李隆基表奏高力士进太子内坊局，因其每日侍奉左右，被提拔为朝散大夫。后兼任右监门卫将军，执掌内侍省事务，权倾朝野。', img: 'lib/gaolishi.jpeg'},
			{id: 5, name: '丁颖', status: '中国现代稻作科学主要奠基人 1888-1964', wordMsg: '“中国人民优秀的农业科学家”', wordFrom: '——周恩来', intro: '丁颖，光绪十四年生于广东省高州县，考上高州中学后，曾不时议论时政，立志科学救国。后以优异成绩留学日本，出国深造。学成回国后，任为教授，建立中国第一个稻作专业研究机构——南路稻作育种场，改进栽培技术，对发展华南粮食生产做出贡献。', img: 'lib/dingying.jpg'},
			{id: 6, name: '陈沛', status: '国名党陆军中将 1898-1987', wordMsg: '“立身怀有君子度，报国何须万户侯”', wordFrom: '——田汉', intro: '陈沛（又名国裕），字度侯。专科出身的陈沛毅然从戎报国，军校毕业参与东征之役，翌年誓师北伐，荣获胜利勋章。后爆发中原之战，陈奉命参战，得胜升任旅长。抗日军兴，陈大挫敌寇嚣张气焰，获宝鼎二等勋章。长沙会战，陈率主力前往增援，威震敌胆。于台北荣民总医院逝世。', img: 'lib/chenpei.jpg'},
			{id: 7, name: '甘子钊', status: '物理学家 1938-', wordMsg: '“有所为，有所不为”', wordFrom: '——甘子钊', intro: '甘子钊学生时代勤奋好学，聪颖过人，以优异成绩考上北京大学物理系，人才“怪才”、“天才”、“奇才”，后成为著名物理学家黄昆教授的大弟子。甘子钊在物理学研究方面卓有成效，研究固体物理和激光物理，又在学术引导和业务组织上为中国的高温超导做出重要贡献。', img: 'lib/ganzizhao.jpg'},			
		]
	},
	components: {
		figure_img: figure_img
	}
});
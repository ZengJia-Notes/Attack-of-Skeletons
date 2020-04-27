// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">名胜遗迹</span>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		pois: [
			{id: 1, name: '高州城冼太庙', intro: '该庙始建于明嘉靖十四年，即公元1535年），在明、清两代曾先后重修。整座庙宇建筑面积达800余平方米，砖木结构，红墙绿瓦，斗拱飞檐，运用彩绘、堆塑、雕刻等艺术形式进行装饰，显得精致而华丽，具有浓郁的民族风格和地方风貌。', url: 'lib/xiantaimiao.jpg'},
			{id: 2, name: '茂名隆古书院', intro: '镇隆建城于公元621年，位于信宜市的镇隆镇，在唐贞观到宋熙宁的430多年中，它还作过窦州州府。它是岭南地区罕见的古建筑群，一批颇有特色的保存完好的古书院，并留下一份沉甸甸的历史文化遗产，成为吸引中外旅客的好去处。', url: 'lib/longgushuyuan.jpg'},
			{id: 3, name: '高州宝光塔', intro: '建于明万历四年，即1576，清咸丰九年，即1859，重修加固塔基。塔为平面八角、九层楼阁式砖石塔，高63.19米。塔腔为壁内折上式结构。石砖塔基边长5.27米，须弥座八面刻有2 4幅精致的花岗岩浮雕图案，内容有“富贵吉祥”、“鱼跃龙门”，还有独具特色的高州香蕉图等。', url: 'lib/baoguangta.jpg'}	
		]
	},
	components: {
		poi: poi
	}
});

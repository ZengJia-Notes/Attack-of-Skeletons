// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">食系茂名</span>
				</div>
			</transition>
		</div>
	`
});

var app_content = new Vue({
	el: '#content',
	data: {
		foods: [
			{id: 1, name: '化州香油鸡', text1: '选出肉质口感极好的走地阉鸡，用“隔水清蒸”或“热汤浇制”两种做法，烩制出皮脆肉嫩、入口香滑的香油鸡。', text2: '秘诀是独特的化州香油!', text3: '香油鸡所用的香油，是化州美食独特的化州香油。与一般的熟油不同，化州香油没有油炸的浓浊，却有独特的清香。以化州香油烹饪的美食独有风味、香而不腻。', pos1: true, pos2: true, img1: 'lib/food_huazhou.jpg', img2: 'lib/food_huazhou2.jpg', url: 'http://www.360doc.com/content/17/0602/04/32685553_659330708.shtml'},
			{id: 2, name: '信宜柴枪粉', text1: '柴枪粉与其他米粉相比，有独特的风味，其形薄、坚韧、质嫩。既可作充饥食物，又可作餐桌小吃，别有一番风味。', text2: '蒸出的粉皮，形似柴枪。', text3: '选用优质大米，多次打磨成幼嫩米浆，后入笼蒸制。蒸出的粉皮，卷成中间大、两头尖，形似柴枪的形状。', pos1: false, pos2: false, img1: 'lib/food_xinyi.jpg', img2: 'lib/food_xinyi2.jpg', url: 'http://shop.bytravel.cn/produce2/67F467AA7C89.html'},
			{id: 3, name: '高州盐焗鸡', text1: '选购走地放养鸡，用砂纸包好，放入瓦煲内，再用炒烫的生晒粗盐焗制，食时皮滑肉嫩、肉质甘香。', text2: '司机大佬的最爱！', text3: '石仔岭公路每天都有南来北往的跑长途的司机。饭店有个叫“太子”的年轻人，发现司机吃饭多数要求上菜快、饭菜简单无妨但求饱，且会选择能保持精力、有营养价值的菜式。于是想出了能一点即上又强筋健肾的盐焗鸡，这道菜很受司机大佬欢迎。', pos1: true, pos2: true, img1: 'lib/food_gaozhou.jpg', img2: 'lib/food_gaozhou2.jpg', url: 'http://www.360doc.com/content/16/0522/12/33344036_561293478.shtml'}		
		]
	},
	components: {
		food: food
	}
});
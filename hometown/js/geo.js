// JavaScript Document

Vue.component('headline', {
	template: `
		<div class="gh">
			<transition appear appear-class="gh-text-appear" appear-active-class="gh-text-appear-active">
				<div class="gh-container">
					<span class="gh-text">地理位置</span>
				</div>
			</transition>
		</div>
	`
});

var createMap = function () {
	var adCode = 440900;
	var depth = 2;
	var map = new AMap.Map("container", {
		zoom: 8,
		center: [110.89, 21.67],
		zoomEnable: false
	});
	
	// 创建省份图层
	var disProvince;
	function initPro(code, dep) {
		adCode = code;
		depth = dep;
		
		disProvince = new AMap.DistrictLayer.Province({
			zIndex: 12,
			adcode: [code],
			depth: dep,
			styles: {
				'fill': function (properties) {
					var adcode = properties.adcode;
					return getColorByAdcode(adcode);
				},
				'province-stroke': 'cornflowerblue',
				'city-stroke': '#000000', // 中国地级市边界
				'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
			},
			opacity: 0.5
		});
		
		disProvince.setMap(map);
	}
	
	// 颜色辅助方法
	var colors = {};
	var getColorByAdcode = function (adcode) {
		if (!colors[adcode]) {
			var gb = Math.random() * 155 + 60;
			colors[adcode] = 'rgb(' + gb + ',' + gb + ',255)';
		}
		return colors[adcode];
	};
	
	initPro(adCode, depth);
	return map;
}

var app_content = new Vue({
	el: '#content',
	data: {
		isActive: false,
		map: null,
		target: document.body
	},
	mounted: function () {
		document.body.addEventListener('mouseover', this.getTargetName);
		document.body.addEventListener('keydown', this.enableZoom);
		document.body.addEventListener('keyup', this.disabledZoom);
		this.map = createMap();
	},
	methods: {
		getHint: function () {
			this.isActive = true;
		},
		hideHint: function () {
			this.isActive = false;
		},
		getTargetName: function () {
			this.target =  event.target.tagName;
		},
		enableZoom: function () {
			if (this.target == "CANVAS") {
				if (window.event.keyCode == 17) {
					this.map.setStatus({
						zoomEnable: true
					});
					this.isActive = false;
				}
			}
		},
		disabledZoom: function () {
			if (this.target == "CANVAS") {
				this.map.setStatus({
					zoomEnable: false
				});
			this.isActive = true;				
			}
		}
	}
});

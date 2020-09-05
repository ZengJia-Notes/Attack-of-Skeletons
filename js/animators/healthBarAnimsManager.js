export class HealthBarAnimsManager extends Phaser.GameObjects.Graphics {
	constructor(scene, x, y, width, value) {
		super(scene, { x, y });
		scene.add.existing(this);

		this.width = width;

		this.value = value;
		this.instant = value;
		this.max = value;

		this.draw();
	}

	decrease(amount) {
		this.value = Phaser.Math.MinSub(this.value, amount, 0);
		return this.value === 0;
	}

	draw() {
		let percentage = this.instant * this.width / this.max;

		this.lineStyle(2, 0x00ff00);
		this.beginPath();
		this.moveTo(0, 0);
		this.lineTo(percentage, 0);
		this.closePath();
		this.strokePath();

		this.lineStyle(1, 0xff0000);
		this.beginPath();
		this.moveTo(percentage, 0);
		this.lineTo(this.width, 0);
		this.closePath();
		this.strokePath();
	}

	preUpdate(time, delta) {
		if (this.instant === this.value)
			return;
		this.instant = Phaser.Math.MinSub(this.instant, delta * 0.05, this.value);

		this.clear();

		if (this.instant > 0)
			this.draw();
	}

	get progress() {
		return (this.max - this.instant) / this.max;
	}
}

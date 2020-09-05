export class RadiusAnimsManager extends Phaser.GameObjects.Graphics {
	constructor(scene, x, y, radius) {
		super(scene, { x, y });
		scene.add.existing(this);

		this.radius = radius;

		this.fillStyle(0xffffff, 0.2);
		this.fillCircle(0, 0, radius);
	}

	get progress() {
		return 1;
	}
}

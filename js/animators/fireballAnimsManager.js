export class FireballAnimsManager extends Phaser.GameObjects.Image {
	constructor(scene, x, y) {
		super(scene, x, y, 'fireball');
		scene.add.existing(this);

		this.moveAnimTween = scene.tweens.add({
			targets: this,
			alpha: 0.7,
			duration: 200,
			repeat: -1,
		});
	}

	preDestroy() {
		this.moveAnimTween.remove();
	}

	get progress() {
		return 1;
	}
}

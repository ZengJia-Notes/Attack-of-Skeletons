export class WizardAnimsManager extends Phaser.GameObjects.Image {
	constructor(scene, x, y) {
		super(scene, x, y, 'wizard');
		scene.add.existing(this);

		this.fireAnimTween = scene.tweens.add({
			targets: this,
			scaleY: 1.1,
			duration: 100,
			ease: 'Power2',
			yoyo: true,
			paused: true	
		});
	}

	playFaceLeft() {
		this.setFlipX(false);
	}

	playFaceRight() {
		this.setFlipX(true);
	}

	playFire() {
		this.fireAnimTween.resume();
	}

	preDestroy() {
		this.fireAnimTween.remove();
	}

	get progree() {
		return 1;
	}
}

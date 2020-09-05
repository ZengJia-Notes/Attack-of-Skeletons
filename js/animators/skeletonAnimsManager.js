export class SkeletonAnimsManager extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'skeleton', 0);
		scene.add.existing(this);

		this.damagedAnimTween = scene.tweens.add({
			targets: this,
			alpha: 0.7,
			scaleX: 0.9,
			scaleY: 1.1,
			duration: 100,
			ease: 'Power2',
			yoyo: true,
			paused: true
		});

		this.deadAnimTween = scene.tweens.add({
			targets: this,
			alpha: 0,
			delay: 800,
			duration: 1200,
			ease: 'Stepped',
			easeParams: [ 8 ],
			paused: true
		});
	}

	playDamaged() {
		this.damagedAnimTween.resume();
	}

	playDead() {
		this.deadAnimTween.resume();
		this.setFrame(1);
	}

	preDestroy() {
		this.damagedAnimTween.remove();
		this.deadAnimTween.remove();
	}

	get progress() {
		return this.deadAnimTween.progress;
	}
}

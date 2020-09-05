import { RadiusAnimsManager } from '../animators/radiusAnimsManager.js'
import { WizardAnimsManager } from '../animators/wizardAnimsManager.js'

export class WizardPrefab extends Phaser.GameObjects.Container {
	constructor(scene, x, y) {
		super(scene, x, y);
		scene.add.existing(this);

		this.setSize(47, 80);
		scene.physics.world.enable(this);

		this.r = 100;

		this.radius = new RadiusAnimsManager(scene, 0, 0, this.r);
		this.anims = new WizardAnimsManager(scene, 0, 0);
		this.add([ this.radius, this.anims ]);
	}

	faceTo(x) {
		if (this.x > x)
			this.anims.playFaceLeft();
		else
			this.anims.playFaceRight();
	}

	fire() {
		this.anims.playFire();
	}

	hideRadius() {
		this.radius.setVisible(false);
	}

	get progress() {
		return Math.min(this.radius.progress, this.anims.progress);
	}

	showRadius() {
		this.radius.setVisible(true);
	}

	tintClear() {
		this.anims.setTint(0xffffff);
	}

	tintGreen() {
		this.anims.setTint(0x00ff00);
	}

	tintRed() {
		this.anims.setTint(0xff0000);
	}

	toggleRadius() {
		this.radius.setVisible(!this.radius.visible);
	}
}

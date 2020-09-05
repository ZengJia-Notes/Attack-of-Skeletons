import { FireballAnimsManager } from '../animators/fireballAnimsManager.js'

export class FireballPrefab extends Phaser.GameObjects.Container {
	constructor(scene, x, y) {
		super(scene, x, y);
		scene.add.existing(this);

		this.setSize(32, 20);
		scene.physics.world.enable(this);

		this.anims = new FireballAnimsManager(scene, 0, 0);

		this.add([ this.anims ]);
	}

	get progress() {
		return this.anims.progress;
	}
}

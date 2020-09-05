import { HealthBarAnimsManager } from '../animators/healthBarAnimsManager.js'
import { SkeletonAnimsManager } from '../animators/skeletonAnimsManager.js'

export class SkeletonPrefab extends Phaser.GameObjects.Container {
	constructor(scene, x, y) {
		super(scene, x, y);
		scene.add.existing(this);

		this.setSize(34, 54);
		scene.physics.world.enable(this);

		this.hp = new HealthBarAnimsManager(scene, -17, -30, 34, 100);
		this.anims = new SkeletonAnimsManager(scene, 0, 0);
		this.add([ this.hp, this.anims ]);

		this.dead = false;
	}

	damage(amount) {
		if (this.dead)
			return;

		if (this.hp.decrease(amount)) {
			this.anims.playDead();
			this.body.destroy();
			this.dead = true;
		}
		else {
			this.anims.playDamaged();
		}
	}

	get progress() {
		return Math.min(this.hp.progress, this.anims.progress);
	}
}

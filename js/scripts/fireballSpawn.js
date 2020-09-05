import { FireballPrefab } from '../prefabs/fireballPrefab.js'

class Fireball extends FireballPrefab {
	constructor(scene, x, y, faceX, faceY, boundary) {
		super(scene, x, y);

		this.boundary = boundary;

		this.garbage = false;
		this.garbageForce = false;

		this.anims.setFlipX(true);

		this.rotation = Phaser.Math.Angle.Between(x, y, faceX, faceY);

		scene.physics.moveTo(this, faceX, faceY, 500);
	}

	preUpdate() {
		if (!this.garbage) {
			let touching = (
				this.body.right < this.boundary.left ||
				this.body.left > this.boundary.right ||
				this.body.bottom < this.boundary.top ||
				this.body.top > this.boundary.bottom
			);
			if (touching) {
				this.garbage = this.garbageForce = true;
			}
		}
	}
}

export class FireballSpawn {
	constructor(scene, boundary) {
		this.available = scene.add.group();
		this.garbage = scene.add.group();

		this.boundary = boundary;
	}

	spawn(x, y, faceX, faceY) {
		let fireball = new Fireball(this.available.scene, x, y, faceX, faceY, this.boundary);
		this.available.add(fireball);

		return fireball;
	}

	update() {
		for (let fireball of this.available.getChildren()) {
			if (fireball.garbage) {
				this.available.remove(fireball);
				this.garbage.add(fireball);
			}
		}
		for (let fireball of this.garbage.getChildren()) {
			if (fireball.garbageForce || fireball.progress === 1) {
				this.garbage.remove(fireball, true, true);
			}
		}
	}
}

import { SkeletonPrefab } from '../prefabs/skeletonPrefab.js'

class Skeleton extends SkeletonPrefab {
	constructor(scene, index, path) {
		super(scene, -100, -100);

		this.index = index;
		this.path = path;
		this.pathIndex = 0;
		this.pathSpeed = 0.00004;
		this.garbage = false;
		this.garbageForce = false;
	}

	preUpdate(time, delta) {
		if (!this.garbage) {
			if (this.dead) {
				this.garbage = true;
			}
			else if (this.pathIndex === 1) {
				this.garbage = this.garbageForce = true;
			}
			else {
				let { x, y } = this.path.getPoint(this.pathIndex);
				this.setPosition(x, y);
				this.pathIndex = Phaser.Math.MaxAdd(this.pathIndex, this.pathSpeed * delta, 1);
			}
		}
	}
}

export class SkeletonSpawn {
	constructor(scene, path) {
		this.available = scene.add.group();
		this.garbage = scene.add.group();
		
		this.counter = 0;
		this.path = path;
	}

	spawn() {
		let skeleton = new Skeleton(this.available.scene, this.counter++, this.path);
		this.available.add(skeleton);

		return skeleton;
	}

	update() {
		for (let skeleton of this.available.getChildren()) {
			if (skeleton.garbage) {
				this.available.remove(skeleton);
				this.garbage.add(skeleton);
			}
		}
		for (let skeleton of this.garbage.getChildren()) {
			if (skeleton.garbageForce || skeleton.progress === 1) {
				this.garbage.remove(skeleton, true, true);
			}
		}
	}
}

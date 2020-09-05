import { WizardPrefab } from '../prefabs/wizardPrefab.js'

class Wizard extends WizardPrefab {
	constructor(scene, x, y, atlas, fireballSpawn) {
		super(scene, x, y);

		this.atlas = atlas;

		this.fireballSpawn = fireballSpawn;
		this.fireTime = 0;
		this.fireSpeed = 800;
		this.target = null;

		this.placed = false;

		this.garbage = false;
		this.garbageForce = false;

		this.tintRed();

		this.body.setCircle(this.r, -(this.r - this.width / 2), -(this.r - this.height / 2));

		this.setInteractive();
		this.on('pointerdown', () => {
			if (this.placed) {
				this.toggleRadius();
			}
			else if (this.testPlace()) {
				this.placed = true;
				this.scene.input.off('pointermove');
				this.hideRadius();
				this.tintClear();
			}
		});
	}

	fire() {
		if (!this.placed)
			return;
		if (this.target) {
			super.fire();
			this.fireballSpawn.spawn(this.x, this.y, this.target.x, this.target.y);
		}
	}

	testPlace() {
		if (this.placed)
			return true;

		return this.atlas.idle(this.x, this.y);
	}

	preUpdate(time) {
		if (!this.placed) {
			let { x , y } = this.scene.input.activePointer;
			this.setPosition(x, y);
			if (this.testPlace()) {
				this.tintGreen();
			}
			else {
				this.tintRed();
			}
			return;
		}
		if (time > this.fireTime) {
			this.fireTime = time + this.fireSpeed;
			this.fire();
		}
		if (this.target) {
			let { x, y, r } = this;
			let { top, bottom, left, right } = this.target;
			let outOfRadius = !(
				Phaser.Math.Distance.Between(x, y, top, left) < r ||
				Phaser.Math.Distance.Between(x, y, top, right) < r ||
				Phaser.Math.Distance.Between(x, y, bottom, left) < r ||
				Phaser.Math.Distance.Between(x, y, bottom, left) < r
			);
			if (outOfRadius || this.target.garbage) {
				this.target = null;
			}
		}
	}

	setTarget(target) {
		if (!this.placed)
			return;
		let replace = !this.target || (this.target && this.target.index > target.index);
		if (replace) {
			this.target = target;
			this.faceTo(target.x);
		}
	}
}

export class WizardSpawn {
	constructor(scene, atlas, fireballSpawn) {
		this.available = scene.add.group();
		this.garbage = scene.add.group();

		this.atlas = atlas;
		this.fireballSpawn = fireballSpawn;
	}

	spawn() {
		let { x, y } = this.available.scene.input.activePointer;
		let wizard = new Wizard(this.available.scene, x, y, this.atlas, this.fireballSpawn);
		this.available.add(wizard);

		return wizard;
	}

	update() {
		for (let wizard of this.available.getChildren()) {
			if (wizard.garbage) {
				this.available.remove(wizard);
				this.garbage.add(wizard);
			}
		}
		for (let wizard of this.garbage.getChildren()) {
			if (wizard.garbageForce || wizard.progress === 1) {
				this.garbage.remove(wizard, true, true);
			}
		}
	}
}

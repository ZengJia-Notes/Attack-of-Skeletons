import { shiftPath, GraphicsAtlas, ImageAtlas, TerrainAtlas, Atlas } from '../res/atlas.js'
import { SkeletonSpawn } from '../scripts/skeletonSpawn.js'
import { FireballSpawn } from '../scripts/fireballSpawn.js'
import { WizardSpawn } from '../scripts/wizardSpawn.js'

export class Screen extends Phaser.Scene {
	constructor() {
		super('screen');

		this.atlas;
		this.graphicsAtlas;
		this.imageAtlas;
		this.terrainAtlas;

		this.skeletonSpawn;
		this.fireballSpawn;
		this.wizardSpawn;

		this.home;

		this.skeletonSpawnDelay = 1000;
		this.skeletonMaxNum = 20;
		this.skeletonAliveNum = 21;
		this.skeletonAttackCounter = 0;
		this.skeletonAttackTween;

		this.start = false;
		this.gameover = false;
		this.win = false;
		this.spaceKey;
		this.wizardToPlace = null;
		this.wizardMaxSize = 4;
		this.ctrlKey;

		this.helpText;
	}

	preload() {
		this.load.json('path', '../files/pathData.json');
		this.load.spritesheet('skeleton', '../assets/skeleton_2x34x54.png', { frameWidth: 34, frameHeight: 54 });
		this.load.image('wizard', '../assets/wizard_47x80.png');
		this.load.image('fireball', '../assets/fireball_32x20.png');
		this.load.image('terrain', '../assets/atlas_terrain_450x450.png');
		this.load.image('atlas', '../assets/atlas_450x450.png');
	}

	create() {
		let pathData = this.cache.json.get('path');
		shiftPath(pathData, 175, 50)
		let path = new Phaser.Curves.Path().fromJSON(pathData);

		let terrainSrcImage = this.textures.get('terrain').getSourceImage()
		let terrain = this.textures.createCanvas('terrainCanvas', 450, 450);
		terrain.draw(0, 0, terrainSrcImage);

		this.atlas = new Atlas(175, 50, terrain);
		// this.graphicsAtlas = new GraphicsAtlas(this, 175, 50, path);
		this.imageAtlas = new ImageAtlas(this, 400, 275);
		// this.terrainAtlas = new TerrainAtlas(this, 400, 275);

		this.skeletonSpawn = new SkeletonSpawn(this, path);
		this.fireballSpawn = new FireballSpawn(this, this.atlas.boundary);
		this.wizardSpawn = new WizardSpawn(this, this.atlas, this.fireballSpawn);

		this.home = this.add.container(325, 20);
		this.home.setSize(30, 15);
		this.physics.world.enable(this.home);

		this.skeletonAttackTween = this.tweens.addCounter({
			from: 0,
			to: this.skeletonMaxNum,
			duration: this.skeletonMaxNum * this.skeletonSpawnDelay,
			paused: true,
			onUpdate: tween => {
				if (Math.floor(tween.getValue()) === this.skeletonAttackCounter) {
					this.skeletonSpawn.spawn();
					this.skeletonAttackCounter++;
				}
			}
		});

		this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.spaceKey.on('down', () => {
			this.start = true;
			this.skeletonAttackTween.resume();
			this.input.off('pointerdown');
		});

		this.ctrlKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
		this.ctrlKey.on('down', () => {
			if (this.wizardSpawn.available.getLength() < this.wizardMaxSize)
				this.wizardToPlace = this.wizardSpawn.spawn();
		});
		this.ctrlKey.on('up', () => {
			if (this.wizardToPlace && !this.wizardToPlace.placed) {
				this.wizardToPlace.garbage = true;
				this.wizardToPlace.garbageForce = true;
			}
			this.wizardToPlace = null;
		});

		this.helpText = this.add.text(5, 5, 'debug', { fontSize: '12px', color: '#efefef' });

		this.physics.add.overlap(this.skeletonSpawn.available, this.fireballSpawn.available, (skeleton, fireball) => {
			skeleton.damage(10);
			if (skeleton.dead) {
				this.skeletonAliveNum--;
				if (this.skeletonAliveNum === 0) {
					this.gameover = true;
					this.win = true;
				}
			}
			fireball.garbage = true;
		});

		this.physics.add.overlap(this.skeletonSpawn.available, this.wizardSpawn.available, (skeleton, wizard) => {
			wizard.setTarget(skeleton);
		});

		this.physics.add.overlap(this.skeletonSpawn.available, this.home, () => {
			this.gameover = true;
			this.win = false;
		});
	}

	update() {
		this.skeletonSpawn.update();
		this.fireballSpawn.update();
		this.wizardSpawn.update();

		let { x, y } = this.input.activePointer;
		this.helpText.setText([
			`${this.start ? `Attack of Skeletons [${this.gameover ? `${this.win ? 'WIN' : 'LOSE'}` : 'RUNNING...'}]` : 'Press [SPACE] bar to start'}`,
			this.wizardToPlace === null ? 'Press [CTRL] key to place [Wizard]' : 'Release [CTRL] key to cancel [Wizard]',
			'',
			`Wizard left: ${this.wizardMaxSize - this.wizardSpawn.available.getLength()}`,
			`Skeleton left: ${this.skeletonAliveNum}`
		]);
	}
}

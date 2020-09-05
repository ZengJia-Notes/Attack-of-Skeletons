export const shiftPath = function(jsonData, offsetX, offsetY) {
	jsonData.x += offsetX;
	jsonData.y += offsetY;

	for (let curve of jsonData.curves) {
		switch (curve.type) {
			case 'MoveTo':
			case 'LineCurve':
				curve.points[0] += offsetX;
				curve.points[1] += offsetY;
				curve.points[2] += offsetX;
				curve.points[3] += offsetY;
				break;
			case 'EllipseCurve':
				curve.x += offsetX;
				curve.y += offsetY;
				break;
			default:
				throw new Error(`undefined type: ${curve.type}`);
		}
	}
};

export class GraphicsAtlas extends Phaser.GameObjects.Graphics {
	constructor(scene, x, y, path) {
		super(scene);
		scene.add.existing(this);

		this.lineStyle(2, 0x0000ff, 1.0);
		path.draw(this);

		this.strokeRect(x, y, 450, 450);
	}
}

export class ImageAtlas extends Phaser.GameObjects.Image {
	constructor(scene, x, y) {
		super(scene, x, y, 'atlas');
		scene.add.existing(this);
	}
}

export class TerrainAtlas extends Phaser.GameObjects.Image {
	constructor(scene, x, y) {
		super(scene, x, y, 'terrain');
		scene.add.existing(this);

		this.setAlpha(0.2);
	}
}

export class Atlas {
	constructor(x, y, terrain) {
		this.width = 450;
		this.height = 450;

		this.terrain = terrain;

		this.boundary = {
			top: y,
			bottom: this.height + y,
			left: x,
			right: this.width + x
		};
	}

	idle(x, y) {
		return this.terrain.getPixel(x - this.boundary.left, y - this.boundary.top).v !== 0;
	}

	withinBoundary(x, y) {
		return (
			x > this.boundary.left &&
			x < this.boundary.right &&
			y > this.boundary.top &&
			y < this.boundary.bottom
		);
	}
}

import { Screen } from './screens/screen.js'

new Phaser.Game({
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: 'screen',
	scene: [ new Screen() ],
	physics: {
		default: 'arcade'
	}
});

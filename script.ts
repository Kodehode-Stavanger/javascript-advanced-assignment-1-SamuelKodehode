const gameWindow = document.getElementById('game-window') as HTMLDivElement
type Player = {
	playerEl: HTMLDivElement
	playerRen: HTMLDivElement
	playerY: number
	playerX: number
	speed: number
	jumpForce: number
	playerRotation: number
	playerSize: number
	keyPressed: {
		ArrowUp: boolean
		ArrowDown: boolean
		ArrowLeft: boolean
		ArrowRight: boolean
	}
}

const player: Player = {
	playerEl: document.getElementById('player') as HTMLDivElement,
	playerRen: document.getElementById('player-render') as HTMLDivElement,
	playerY: gameWindow.clientHeight / 2,
	playerX: gameWindow.clientWidth / 2,
	speed: 3,
	jumpForce: 0,
	playerRotation: 0,
	playerSize: 100,
	keyPressed: {
		ArrowUp: false,
		ArrowDown: false,
		ArrowLeft: false,
		ArrowRight: false
	}
}

const buttons: string[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

const updatePlayer = (): void => {
	const onGround: boolean = player.playerY + player.playerEl.clientHeight >= gameWindow.clientHeight

	if (player.keyPressed.ArrowUp && onGround) {
		player.jumpForce = 44 //JumpPower
	}

	player.playerY -= player.jumpForce //add jumpForce to player each frame

	if (player.jumpForce > 0) {
		player.jumpForce -= 4 //reduce jumpForce per frame
	}

	if (!onGround) {
		player.playerY += 4 // gravity
		player.playerRen.style.backgroundImage = `url('img/gggrain1.svg')`
		/*		player.playerRen.style.boxShadow = '0 0 150px blue'*/
		player.playerRen.style.backgroundSize = `100px`
	}
	if (onGround) {
		player.playerRen.style.backgroundImage = `url('img/gggrain2.svg')`
		/*		player.playerRen.style.boxShadow = '0 0 150px yellow'*/
		player.playerRen.style.backgroundSize = `100px`
	}

	if (
		player.keyPressed.ArrowDown &&
		player.playerY + player.playerEl.clientHeight + player.speed < gameWindow.clientHeight
	) {
		player.playerY += player.speed
	}

	if (player.keyPressed.ArrowLeft && player.playerX - player.speed - player.playerSize > 0) {
		player.playerX -= player.speed
		player.playerRotation -= 10
	}

	if (
		player.keyPressed.ArrowRight &&
		player.playerX + player.speed + player.playerRen.clientWidth / 2 < gameWindow.clientWidth
	) {
		player.playerX += player.speed
		player.playerRotation += 10
	}

	player.playerRen.style.rotate = `${player.playerRotation}deg`

	player.playerEl.style.top = `${player.playerY}px`
	player.playerEl.style.left = `${player.playerX}px`
}

function gameLoop(): void {
	updatePlayer()
	requestAnimationFrame(gameLoop)
}

gameLoop()

window.addEventListener('keydown', (e: KeyboardEvent): void => {
	buttons.forEach((button: string): void => {
		if (button === e.key) {
			// @ts-ignore
			player.keyPressed[button] = true
		}
	})
})

window.addEventListener('keyup', (e: KeyboardEvent): void => {
	buttons.forEach((button: string): void => {
		if (button === e.key) {
			// @ts-ignore
			player.keyPressed[button] = false
		}
	})
})

window.addEventListener('click', (ob: MouseEvent): void => {
	player.playerX = ob.clientX
	player.playerY = ob.clientY
})

console.log(player.playerX)

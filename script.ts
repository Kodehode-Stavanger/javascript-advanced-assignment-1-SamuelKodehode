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
	playerY: window.innerHeight / 2,
	playerX: window.innerWidth / 2,
	speed: 10,
	jumpForce: 0,
	playerRotation: 0,
	playerSize: 0,
	keyPressed: {
		ArrowUp: false,
		ArrowDown: false,
		ArrowLeft: false,
		ArrowRight: false
	}
}

const buttons: string[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

const updatePlayer = (): void => {
	const onGround: boolean = player.playerY + player.playerEl.clientHeight >= window.innerHeight

	if (player.keyPressed.ArrowUp && onGround) {
		player.jumpForce = 30 //JumpPower
	}

	player.playerY -= player.jumpForce //add jumpForce to player each frame

	if (player.jumpForce > 0) {
		player.jumpForce -= 1 //reduce jumpForce per frame
	}

	if (!onGround) {
		player.playerY += 10 // gravity
		player.playerRen.style.backgroundImage = `url('img/gggrain1.svg')`
		player.playerRen.style.backgroundSize = `100px`
	}
	if (onGround) {
		player.playerRen.style.backgroundImage = `url('img/gggrain2.svg')`
		player.playerRen.style.backgroundSize = `100px`
	}

	if (player.keyPressed.ArrowDown && player.playerY + player.playerSize + player.speed < window.innerHeight) {
		player.playerY += player.speed
	}

	if (player.keyPressed.ArrowLeft && player.playerX - player.speed > 0) {
		player.playerX -= player.speed
		player.playerRotation -= 10
	}

	if (player.keyPressed.ArrowRight && player.playerX + player.playerSize + player.speed < window.innerWidth) {
		player.playerX += player.speed
		player.playerRotation += 10
	}

	player.playerRen.style.rotate = `${player.playerRotation}deg`

	player.playerEl.style.top = `${player.playerY}px`
	player.playerEl.style.left = `${player.playerX}px`
}

setInterval(updatePlayer, 17)

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

"use strict";
const gameWindow = document.getElementById('game-window');
const player = {
    playerEl: document.getElementById('player'),
    playerRen: document.getElementById('player-render'),
    playerY: gameWindow.clientHeight / 2,
    playerX: gameWindow.clientWidth / 2,
    speed: 3,
    jumpForce: 0,
    playerRotation: 0,
    playerSize: 100,
    playerVelocity: 0,
    keyPressed: {
        ArrowUp: false,
        ArrowLeft: false,
        ArrowRight: false
    }
};
const buttons = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
const updatePlayer = () => {
    const onGround = player.playerY + player.playerEl.clientHeight >= gameWindow.clientHeight;
    if (player.keyPressed.ArrowUp && onGround) {
        player.jumpForce = 30;
    }
    player.playerY -= player.jumpForce;
    if (player.jumpForce > 0) {
        player.jumpForce -= 1;
    }
    player.playerVelocity += 0.4;
    if (!onGround && player.jumpForce <= 0) {
        player.playerY += player.playerVelocity;
    }
    if (!onGround) {
        player.playerRen.style.backgroundImage = `url('img/gggrain1.svg')`;
        player.playerRen.style.backgroundSize = `100px`;
    }
    if (onGround) {
        player.playerRen.style.backgroundImage = `url('img/gggrain2.svg')`;
        player.playerRen.style.backgroundSize = `100px`;
        player.playerVelocity = 0;
    }
    if (player.keyPressed.ArrowLeft && player.playerX - player.speed - player.playerSize > +75) {
        player.playerX -= player.speed;
        player.playerRotation -= 10;
    }
    if (player.keyPressed.ArrowRight && player.playerX + player.speed < gameWindow.clientWidth + 75) {
        player.playerX += player.speed;
        player.playerRotation += 10;
    }
    player.playerRen.style.rotate = `${player.playerRotation}deg`;
    player.playerEl.style.top = `${player.playerY}px`;
    player.playerEl.style.left = `${player.playerX}px`;
};
function gameLoop() {
    updatePlayer();
    requestAnimationFrame(gameLoop);
}
gameLoop();
window.addEventListener('keydown', (e) => {
    buttons.forEach((button) => {
        if (button === e.key) {
            player.keyPressed[button] = true;
        }
    });
});
window.addEventListener('keyup', (e) => {
    buttons.forEach((button) => {
        if (button === e.key) {
            player.keyPressed[button] = false;
        }
    });
});
window.addEventListener('click', (ob) => {
    player.playerX = ob.clientX;
    player.playerY = ob.clientY;
});
console.log(player.playerX);
//# sourceMappingURL=script.js.map
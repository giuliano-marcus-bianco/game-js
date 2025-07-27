const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const collisionCanvas = document.getElementById("collisionCanvas");
const collisionContext = collisionCanvas.getContext("2d");
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

let gameOver = false;

let score = 0;
context.font = "100px 'HALLOWEENN'";

let timeToNextRaven = 0;
let ravenInterval = 500;
let lastTime = 0;

let ravens = [];
class Raven {
    constructor() {
        this.spriteWidth = 271;
        this.spriteHeight = 194;
        this.sizeModifier = Math.random() * 0.4 + 0.4;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 5 + 3;
        this.directionY = Math.random() * 5 - 2.5;
        this.stillOnScreen = true;
        this.image = new Image();
        this.image.src = "raven.png";
        this.frame = 0;
        this.maxFrame = 5;
        this.timeSinceFlap = 0;
        this.flapInterval = 300 / this.directionX;
        this.randomColors = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
        ];
        this.color =
            "rgb(" +
            this.randomColors[0] +
            "," +
            this.randomColors[1] +
            "," +
            this.randomColors[2] +
            ")";
    }
    update(deltaTime) {
        if (this.y < 0 || this.y > canvas.height - this.height) {
            this.directionY = this.directionY * -1;
        }
        this.x -= this.directionX;
        this.y += this.directionY;
        if (this.x < 0 - this.width) this.stillOnScreen = false;
        this.timeSinceFlap += deltaTime;
        if (this.timeSinceFlap > this.flapInterval) {
            if (this.frame >= this.maxFrame) this.frame = 0;
            else this.frame++;
            this.timeSinceFlap = 0;
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(this.x, this.y, this.width, this.color));
            }
        }
        if (this.x < 0 - this.width) {
            life.audio.play();
            lifes--;
            if (lifes === 0) gameOver = true;
        }
    }
    draw() {
        collisionContext.fillStyle = this.color;
        collisionContext.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(
            this.image,
            this.frame * this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

let slashes = [];
class Slash {
    constructor(x, y, size) {
        this.image = new Image();
        this.image.src = "slash.png";
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.x = x;
        this.y = y;
        this.size = size;
        this.frame = 0;
        this.sound = new Audio();
        this.sound.src = "sound" + Math.floor(Math.random() * 2.99) + ".wav";
        this.timeSinceLastFrame = 0;
        this.frameInterval = 200;
        this.stillOnScreen = true;
    }
    update(deltaTime) {
        if (this.frame === 0) this.sound.play();
        this.timeSinceLastFrame += deltaTime;
        if (this.timeSinceLastFrame > this.frameInterval) {
            this.frame++;
            if (this.frame > 5) this.stillOnScreen = false;
            this.timeSinceLastFrame = 0;
        }
    }
    draw() {
        context.drawImage(
            this.image,
            this.frame * this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y - this.size,
            this.size,
            this.size
        );
    }
}

let particles = [];
class Particle {
    constructor(x, y, size, color){
        this.size = size;
        this.x = x + size * .5;
        this.y = y + size * .3;
        this.radius = Math.random() * this.size * .1;
        this.maxRadius = Math.random() * 20 + 25;
        this.stillOnScreen = true;
        this.speedX = Math.random() * 1 + .5;
        this.color = color;
    }
    update(){
        this.x += this.speedX;
        this.radius += .5;
        if (this.radius > this.maxRadius - 5) this.stillOnScreen = false;
    }
    draw(){
        context.save();
        context.globalAlpha = 1 - this.radius / this.maxRadius;
        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255)";
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
    }
}

function drawScore() {
    context.fillStyle = "black";
    context.fillText(score + " CORVOS ", 50, 100);
    context.fillStyle = "white";
    context.fillText(score + " CORVOS ", 52.5, 102.5);
}

let lifes = 3;
const maxLifes = 6;
class Life {
    constructor() {
        this.spriteWidth = 305;
        this.spriteHeight = 320;
        this.imageScale = 0.6;
        this.width = this.spriteWidth * this.imageScale;
        this.height = this.spriteHeight * this.imageScale;
        this.image = new Image();
        this.image.src = "life.png";
        this.x = canvas.width - 200;
        this.y = -10;
        this.audio = new Audio();
        this.audio.src = "crow.mp3";
    }
}

const life = new Life();

function drawLifes() {
    for (let i = 0; i < lifes; i++) {
        context.drawImage(
            life.image,
            life.x - i * 80,
            life.y,
            life.width,
            life.height
        );
    }
}

const gameOverImage = new Image();
gameOverImage.src = 'game-over.png';

function drawGameOver() {
    context.fillStyle = "rgba(255, 255, 255, 0.5)";
    context.beginPath();
    context.roundRect(100, 100, canvas.width - 200, canvas.height - 200, 15);
    context.fill();
    context.drawImage(gameOverImage, canvas.width * 0.5 - 302, 150);
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.font = "50px 'HALLOWEENN'"
    context.fillText("MATOU " + score + " CORVOS... MAS FOI MORTO POR ELES", canvas.width * 0.5, canvas.height * 0.80);
}

window.addEventListener("click", function (e) {
    const detectPixelColor = collisionContext.getImageData(e.x, e.y, 1, 1);
    console.log(detectPixelColor);
    const pixelColor = detectPixelColor.data;
    ravens.forEach((object) => {
        if (
            object.randomColors[0] === pixelColor[0] &&
            object.randomColors[1] === pixelColor[1] &&
            object.randomColors[2] === pixelColor[2]
        ) {
            // collision detected
            object.stillOnScreen = false;
            score++;
            if (score % 10 === 0 && score != 0 && lifes < maxLifes) lifes++;
            slashes.push(new Slash(object.x, object.y, object.width));
        }
    });
});

function animate(timeStamp) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    collisionContext.clearRect(0, 0, canvas.width, canvas.height);
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    timeToNextRaven += deltaTime;
    if (timeToNextRaven > ravenInterval) {
        ravens.push(new Raven());
        timeToNextRaven = 0;
        ravens.sort(function (a, b) {
            return a.width - b.width;
        });
    }
    drawScore();
    drawLifes();
    [...particles, ...ravens, ...slashes].forEach((object) => object.update(deltaTime));
    [...particles, ...ravens, ...slashes].forEach((object) => object.draw());
    ravens = ravens.filter((object) => object.stillOnScreen);
    particles = particles.filter((object) => object.stillOnScreen);
    if (!gameOver) requestAnimationFrame(animate);
    else drawGameOver();
}
animate(0);

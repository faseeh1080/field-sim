const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

class Charge {
    constructor(x, y, radius, charge) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.charge = charge;
        this.color = charge > 0 ? "#FF0000" : charge < 0 ? "#0000FF" : "#FFFF00";
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

let charges = [];
let lastTime = null;

function createNewCharge() {
    charges.push(new Charge(Math.round(canvas.width / 2), Math.round(canvas.height / 2), 18, 1));
}

function drawCharges() {
    charges.forEach(element => {
        element.draw();
    });
}

document.getElementById('new-btn').addEventListener('click', createNewCharge);

function animate(currentTime) {
    if (lastTime === null) lastTime = currentTime;

    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    drawCharges();
    charges.forEach(element => {
        element.x += 50 * deltaTime;
    });

    requestAnimationFrame(animate); // Loop the animation
}

function init() {
    requestAnimationFrame(animate);
}
init();

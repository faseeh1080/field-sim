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

let myCharge = new Charge(50, 50, 10, 2);
let lastTime = null;

function animate(currentTime) {
    if (lastTime === null) lastTime = currentTime;

    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    myCharge.draw();
    myCharge.x += 100 * deltaTime;
    if (myCharge.x > canvas.width + myCharge.radius) {
        myCharge.x = -myCharge.radius;
    }

    requestAnimationFrame(animate); // Loop the animation
}

requestAnimationFrame(animate);
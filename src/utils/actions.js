function writeText(color, text, size, posX, posY) {
    ctx.fillStyle = color;
    ctx.font = "normal " + size + "pt Arial";
    ctx.fillText(text, posX, posY);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
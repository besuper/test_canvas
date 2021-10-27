class Player {
    constructor() {
        this.life = 20.0;
        this.speed = 1.0;

        this.posX = canvas.width / 2.0;
        this.posY = canvas.height / 2.0;

        this.velX = 0.0;
        this.velY = 0.0;

        this.width = 20;
        this.height = 20;

        this.color = 'pink';
    }

    get getPosX() {
        return this.posX;
    }

    get getPosY() {
        return this.posY;
    }

    move(key) {
        this.velX = 0;
        this.velY = 0;

        if (key == 'ArrowRight') {
            if ((this.posX + this.width) >= canvas.width) {
                return;
            }

            this.velX = this.speed;
        }

        if (key == 'ArrowLeft') {
            if ((this.posX) <= 0) {
                return;
            }

            this.velX = -this.speed;
        }

        if (key == 'ArrowUp') {
            if ((this.posY) <= 0) {
                return;
            }

            this.velY = -this.speed;
        }

        if (key == 'ArrowDown') {
            if ((this.posY + this.height) >= canvas.height) {
                return;
            }

            this.velY = this.speed;
        }

        this.posX += this.velX;
        this.posY += this.velY;
    }

    setColor(color) {
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);

        writeText("Black", "Mineur", "12", this.posX - 10, this.posY - 5);
    }
}
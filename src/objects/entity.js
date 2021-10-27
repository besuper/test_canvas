class Entity {
    constructor() {
        this.life = 20.0;

        this.speed = 0.5;

        this.width = 20;
        this.height = 20;

        this.posX = Math.floor(Math.random() * (canvas.width - this.width));
        this.posY = Math.floor(Math.random() * (canvas.height - this.height));

        this.velX = 0.0;
        this.velY = 0.0;

        this.color = pickRandomColor();
    }

    chasse(posX, posY) {
        this.velX = 0;
        this.velY = 0;

        if (this.posX < posX) {
            this.velX = this.speed;
        }

        if (this.posX > posX) {
            this.velX = -this.speed;
        }

        if (this.posY > posY) {
            this.velY = -this.speed;
        }

        if (this.posY < posY) {
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

        writeText("Black", "TK", "12", this.posX - 5, this.posY - 5); //:flushed:
    }
}
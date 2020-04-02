class Frog {
    constructor() {
        this.x = width / 2;
        this.y = height / 12 * 11;
    }
    update() {
        if (this.x < 45) {
            this.x = 50;
        }
        if (this.x > width - 45) {
            this.x = width - 50;
        }
        if (this.y > height / 12 * 11) {
            this.y = height / 12 * 11;
        }
        if (this.y < 0 + 45) {
            this.y = height / 12 * 11 - (500);
        }

    }

    show() {
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
    }
}
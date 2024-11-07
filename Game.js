import { Display } from "./Display.js";
export class Game {
    constructor(height, width, speed) {
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.display = new Display(width, height, speed);
    }
    getScore() {
        return 0;
    }
    play(display) {
        return false;
    }
}

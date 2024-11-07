import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Snake } from "./Snake.js";
export class Game {
    constructor(height, width, speed) {
        //protected display:Display;
        this.directions = [Direction.RIGHT];
        this.height = height;
        this.width = width;
        this.speed = speed;
        //this.display = new Display(width, height, speed);
        this.apple = new Apple(20, 10);
        this.snake = new Snake(20, 10);
    }
    getApple() {
        return this.apple;
    }
    getSnake() {
        return this.snake;
    }
    resetApple() {
        let x = 0;
        let y = 0;
        let isTouch = true;
        while (isTouch == true) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if (this.snake.touch(x, y) == true) {
                isTouch = true;
            }
            else {
                isTouch = false;
            }
        }
        this.apple.setApple(x, y);
    }
    getDirection() {
        return this.directions[0];
    }
    getScore() {
        return 0;
    }
    play(display) {
        return false;
    }
    hasLoose() {
        let head = this.snake.getBody()[0];
        if (this.snake.touch(head.getX(), head.getY())) {
            return true;
        }
        if (head.getX() < 0 || head.getY() < 0 || head.getX() >= this.width || head.getY() >= this.height) {
            return true;
        }
        return false;
    }
}

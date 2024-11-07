import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Snake } from "./Snake.js";
export class Game {
    constructor(height, width, speed) {
        this.directions = [Direction.RIGHT];
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.apple = new Apple(20, 10);
        this.snake = new Snake(20, 10);
        this.score = 0;
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
    gameLoop() {
        let point = 0;
        if (!this.hasLoose()) {
            if (this.directions.length > 1) {
                this.directions.shift();
            }
            let newDir = this.directions[0];
            this.snake.grow(newDir);
            if (this.snake.touch(this.apple.getX(), this.apple.getY()) == false) {
                this.snake.cropTail();
            }
            else {
                point = point + 1;
                this.resetApple();
                console.log(this.score);
            }
        }
        else {
            this.resetApple();
        }
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
    handleEvents() {
        document.onkeydown = (e) => {
            let lastDirection = this.directions[this.directions.length - 1];
            switch (e.keyCode) {
                case 37:
                    if (lastDirection == Direction.DOWN || lastDirection == Direction.UP)
                        this.directions.push(Direction.LEFT);
                    break;
                case 38:
                    if (lastDirection == Direction.LEFT || lastDirection == Direction.RIGHT)
                        this.directions.push(Direction.UP);
                    break;
                case 39:
                    if (lastDirection == Direction.DOWN || lastDirection == Direction.UP)
                        this.directions.push(Direction.RIGHT);
                    break;
                case 40:
                    if (lastDirection == Direction.LEFT || lastDirection == Direction.RIGHT)
                        this.directions.push(Direction.DOWN);
                    break;
            }
        };
    }
    play(display) {
        return false;
    }
}

import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Display } from "./Display.js";
import { Snake } from "./Snake.js";

export class Game {
    protected height:number; 
    protected width:number;
    protected speed:number;
    protected directions: Direction[] = [Direction.RIGHT];
    protected snake: Snake;
    protected apple: Apple;
    protected score:number;

    constructor(height:number,width:number, speed:number) {
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.apple = new Apple(20, 10);
        this.snake = new Snake(20, 10);
        this.score = 0;
    }

    getApple(): Apple {
        return this.apple
    }

    getSnake(): Snake {
        return this.snake
    }

    resetApple() {
        let x: number = 0;
        let y: number = 0;
        let isTouch: boolean = true;
        while (isTouch == true) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if (this.snake.touch(x, y) == true) {
                isTouch = true
            }
            else {
                isTouch = false
            }
        }
        this.apple.setApple(x, y)
    }

    getDirection() {
        return this.directions[0]
    }

    public getScore() : number {
        return 0;
    }

    
    gameLoop() {
        let point: number = 0
        if (!this.hasLoose()) {
            if (this.directions.length > 1){
                this.directions.shift()
            }
            let newDir = this.directions[0]
            this.snake.grow(newDir)
            if (this.snake.touch(this.apple.getX(), this.apple.getY()) == false) {
                this.snake.cropTail()
            } 
            else {
                point = point + 1
                this.resetApple()
                console.log(this.score)
            }
        } 
        else {
            this.resetApple()
        }
        

    }
    
    hasLoose(): boolean {
        let head = this.snake.getBody()[0];
        if (this.snake.touch(head.getX(), head.getY())) {
            return true
        }
        if (head.getX() < 0 || head.getY() < 0 || head.getX() >= this.width || head.getY() >= this.height) {
            return true;
        }
        return false
    }

    handleEvents() {
        document.onkeydown = (e) => {
            let lastDirection = this.directions[this.directions.length - 1]
            switch (e.keyCode) {
                case 37:
                    if (lastDirection == Direction.DOWN || lastDirection == Direction.UP) this.directions.push(Direction.LEFT)
                    break;
                case 38:
                    if (lastDirection == Direction.LEFT || lastDirection == Direction.RIGHT) this.directions.push(Direction.UP);
                    break;
                case 39:
                    if (lastDirection == Direction.DOWN || lastDirection == Direction.UP) this.directions.push(Direction.RIGHT);
                    break;
                case 40:
                    if (lastDirection == Direction.LEFT || lastDirection == Direction.RIGHT) this.directions.push(Direction.DOWN);
                    break;
            }
        }
    }

    public play(display:Display):boolean {
        return false
    }

}

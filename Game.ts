import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Display } from "./Display.js";
import { Position } from "./Position.js";
import { Snake } from "./Snake.js";

export class Game {
    protected height:number; 
    protected width:number;
    protected scale: number;
    protected speed:number;
    protected directions: Direction[] = [Direction.RIGHT];
    protected snake: Snake;
    protected apple: Apple;
    protected score:number;

    constructor(height:number,width:number, speed:number) {
        this.height = height;
        this.scale = 0;
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
        while (isTouch) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            if (this.snake.touch(new Position(x, y))) {
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

    getScore() : number {
        return 0;
    }
    
    hasLoose(): boolean {
        let head = this.snake.getBody()[0];
        // if (this.snake.touch(this.apple)) {
        //     return true
        // }
        if (head.getX() < 0 || head.getY() < 0 || head.getX() >= this.width || head.getY() >= this.height) {
            return true;
        }
        return false
    }

    handleEvents() {
        document.onkeydown = (e) => {
            let lastDirection = this.directions[this.directions.length - 1]
            switch (e.key) {
                case "37":
                    if (lastDirection == Direction.RIGHT || this.directions.push(Direction.RIGHT))
                    break;
                case "38":
                    if (lastDirection == Direction.DOWN || this.directions.push(Direction.DOWN))
                    break;
                case "39":
                    if (lastDirection == Direction.LEFT || this.directions.push(Direction.LEFT))
                    break;
                case "40":
                    if (lastDirection == Direction.UP || this.directions.push(Direction.UP))
                    break;
            }
        }
    }

    play(display:Display):boolean {
        let point: number = 0
        if (!this.hasLoose()) {
            if (this.directions.length > 1){
                this.directions.shift()
            }
            let newDir = this.directions[0]
            this.snake.grow(newDir)
            if (this.snake.touch(this.apple)) {
                point = point + 1
                this.resetApple()
                console.log(this.score)
            } 
            else {
                this.snake.cropTail()
            }
        } 
        else {
            return true
        }

        display.drawCircle(this.apple.getX(), this.apple.getY(), "red"); 
        let body = this.snake.getBody(); 
        for (let i = 0; i < body.length; i++) { 
            display.drawRectangle(body[i].getX(), body[i].getY(), "blue"); 
        } 
        display.refreshScore(); 
        return false;
    }
}

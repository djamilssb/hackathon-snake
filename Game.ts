import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Display } from "./Display.js";
import { Snake } from "./Snake.js";

export class Game{
    protected height:number; 
    protected width:number;
    protected speed:number;
    protected directions: Direction[] = [Direction.RIGHT];
    protected snake: Snake;
    protected apple: Apple;

    constructor(height:number,width:number, speed:number) {
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.apple = new Apple(20, 10);
        this.snake = new Snake(20, 10);
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

    public play(display:Display):boolean{
        return false;
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
}
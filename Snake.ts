import { Direction } from "./Direction.js";
import { Position } from "./Position.js";
export class Snake extends Position {
    protected body: Position[] = [] ;

    constructor(x: number, y: number) {
        super(x, y)
    
        this.body.push(new Position(x,y))
    }

    public grow(d:Direction){

    }

    cropTail() {
        this.body.pop()
    }

    getBody() {
        return this.body
    }

    touch(x: number, y: number): boolean {
        for (let i = 1; i < this.getBody().length; i++) {
            if (this.getBody()[i].getX() == x && this.getBody()[i].getY() == y) {
                return true
            }
        }
        return false;
    }

}
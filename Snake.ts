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


}
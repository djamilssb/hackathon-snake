import { Apple } from "./Apple.js";

export class Point extends Apple {
    constructor(x:number,y:number){
        super(x,y)
    }

    public touch(point:Point) : boolean {
        return (this.x === point.x && this.y === point.y)
    }
}
import { Apple } from "./Apple.js";

export class Point {
    protected x:number ;
    protected y:number ;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    public touch(point:Point) : boolean {
        return (this.x === point.x && this.y === point.y)
    }
}
import { Point } from "./Point.js";
export class Apple extends Point {

    constructor(x:number, y:number){
        super(x,y)
    }

    public setApple(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    public getApple(){
        return this.x , this.y
    }
}
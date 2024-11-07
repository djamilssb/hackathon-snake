import { Position } from "./Position.js";
export class Apple extends Position {

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
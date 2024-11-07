import { Position } from "./Position.js";
export class Apple extends Position {

    constructor(x:number, y:number){
        super(x,y)
    }

    setApple(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    getApple(){
        return this.x , this.y
    }
}
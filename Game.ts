import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Display } from "./Display.js";
import { Snake } from "./Snake.js";

export class Game{
    protected height:number; 
    protected width:number;
    protected speed:number;
    protected display:Display;

    constructor(height:number,width:number, speed:number) {
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.display = new Display(width, height, speed)
    }
    
    public getScore():number{
        return 0;
    }

    public play(display:Display):boolean{
        return false;
    }
}
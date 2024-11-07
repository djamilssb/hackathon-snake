import { Position } from "./Position.js";
export class Apple extends Position {
    constructor(x, y) {
        super(x, y);
    }
    setApple(x, y) {
        this.x = x;
        this.y = y;
    }
    getApple() {
        return this.x, this.y;
    }
}

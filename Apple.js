import { Point } from "./Point.js";
export class Apple extends Point {
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

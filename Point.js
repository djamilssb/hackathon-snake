import { Apple } from "./Apple.js";
export class Point extends Apple {
    constructor(x, y) {
        super(x, y);
    }
    touch(point) {
        return (this.x === point.x && this.y === point.y);
    }
}

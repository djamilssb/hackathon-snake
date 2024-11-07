import { Position } from "./Position.js";
export class Snake extends Position {
    constructor(x, y) {
        super(x, y);
        this.body = [];
        this.body.push(new Position(x, y));
    }
    grow(d) {
    }
}

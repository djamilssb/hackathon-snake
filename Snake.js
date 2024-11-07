import { Position } from "./Position.js";
export class Snake extends Position {
    constructor(x, y) {
        super(x, y);
        this.body = [];
        this.body.push(new Position(x, y));
    }
    grow(d) {
    }
    cropTail() {
        this.body.pop();
    }
    getBody() {
        return this.body;
    }
    touch(x, y) {
        for (let i = 1; i < this.getBody().length; i++) {
            if (this.getBody()[i].getX() == x && this.getBody()[i].getY() == y) {
                return true;
            }
        }
        return false;
    }
}

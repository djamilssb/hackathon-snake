export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    touch(point) {
        if (this.x === point.x || this.y === point.y) {
            return true;
        }
        else {
            return false;
        }
    }
    move() {
    }
}

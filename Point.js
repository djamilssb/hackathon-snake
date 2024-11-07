export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    touch(point) {
        return (this.x === point.x && this.y === point.y);
    }
}

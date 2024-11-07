import { Game } from "./Game.js"
import { Display } from "./Display.js"
export class Draw{
    private display: Display

    constructor(width: number, height: number, scale: number) {
        this.display = new Display(width, height, scale)
    }

    draw(game: Game) {
        let s = game.getSnake()
        let a = game.getApple()
        this.display.clear()
        this.display.drawRectangle(a.getX(), a.getY(), "red")

        let body = s.getBody();
        for (let i = 0; i < body.length; i++) {
            this.display.drawRectangle(body[i].getX(),  body[i].getY(), "blue")
        }
    }
}
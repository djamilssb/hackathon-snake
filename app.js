import { Display } from "./Display.js";
import { Game } from "./Game.js";
let game = new Game(50, 50, 100);
let display = new Display(50, 50);
/*
Interactions with your game if needed
*/
display.play(game);

import { Component } from '@angular/core';
import { Game } from 'src/models/game';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  pickCardAnimation = false;
  game:any = Game;


  constructor() { }
  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.game = new Game();
  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}

import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone should keep drinking until the person who picked the card stops. So who knows how long you will be going for! 2– is Choose – You can choose someone to drink' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category(e.g Colors). Each player must enumerate one item from category' },
    { title: 'Bust a jive', description: 'Olayer 1 makes a dance move. Player 2 repeats the dance move adds a second one.' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'Drink all' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'Drink all' },
    { title: 'Never have i ever ...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' }
  ];

  title = '';
  description = '';
  @Input() card: string;


  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
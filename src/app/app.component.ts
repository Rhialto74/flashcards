import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardService]
})
export class AppComponent implements OnInit {
  title = 'Flash Cards For Learning';
  cards: Card[];
  selectedCard: Card;
  currentCard: string;
  constructor(private cardService: CardService) {}
  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  getCards(): void {
    this.cardService.getCards().then(cards => this.cards = cards).then(() => this.randomizeCards()).then(() => this.getNextCard());
  }

  ngOnInit(): void {
    this.getCards();
  }

  getNextCard() {
    this.currentCard = this.cards.shift().content;
  }

  randomizeCards() {
      let array = this.cards;
      let currentIndex = Object.keys(array).length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      this.cards = array;
  }
}



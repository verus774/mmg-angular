import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../shared/game.service';
import {ICard} from '../card/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() cardsCount: number;
  cards: ICard[];

  constructor(private gameService: GameService) {
  }

  onCardClick(cardId: string | number) {
    this.cards.map((card, idx, arr) => {
      if (card.id === cardId) {
        arr[idx] = {...card, isOpened: !card.isOpened};
      }
      return card;
    });
  }

  ngOnInit() {
    this.cards = this.gameService.generateCards(this.cardsCount);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../card/card.model';
import {Store} from '@ngrx/store';

import * as CardsActions from '../store/actions/cards.actions';
import {Observable} from 'rxjs';
import {AppState} from '../store/app.state';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() cardsCount: number;
  cards: Observable<ICard[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.cards = this.store.select('cards');

    this.store.dispatch(new CardsActions.GenerateCards({
      cardsCount: 4,
      backSide: 'assets/img/back/42.jpg',
      frontImgDir: 'assets/img/front/christmas',
    }));
  }

  trackByFn(index: number, item: ICard) {
    return item.id;
  }

  onCardClicked(card: ICard) {
    const {id, isOpened} = card;

    if (!isOpened) {
      this.store.dispatch(new CardsActions.OpenCard(id));
    }
  }
}

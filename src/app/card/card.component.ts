import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

import {ICard} from './card.model';
import {AppState} from '../store/app.state';
import * as CardsActions from '../store/actions/cards.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card: ICard;

  constructor(private store: Store<AppState>) {
  }

  onCardClick(card: ICard) {
    const {id, isOpened} = card;

    if (!isOpened) {
      this.store.dispatch(new CardsActions.OpenCard(card.id));
    }
  }

}

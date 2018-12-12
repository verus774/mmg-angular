import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from '@ngrx/store';

import {ICard} from './card.model';
import {AppState} from '../store/app.state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card: ICard;
  @Output() cardClicked = new EventEmitter<ICard>();

  constructor(private store: Store<AppState>) {
  }

  onCardClick(card: ICard) {
    this.cardClicked.emit(card);
  }

}

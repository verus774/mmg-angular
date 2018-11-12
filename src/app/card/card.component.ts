import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ICard} from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card: ICard;
  @Output() cardClick = new EventEmitter<string | number>();

  onCardClick(cardId: string | number) {
    this.cardClick.emit(cardId);
  }

}

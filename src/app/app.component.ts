import {Component} from '@angular/core';
import {ICard} from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  card: ICard = {
    id: 1,
    frontSide: 'assets/img/front/christmas/0.jpg',
    backSide: 'assets/img/back/42.jpg',
    isOpened: false,
    isRemoved: false,
  };

  onCardClick(cardId: string | number) {
    this.card.isOpened = !this.card.isOpened;
  }

}

import {Injectable} from '@angular/core';
import {ICard} from '../card/card.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  idCounter = 1;

  generateCards(cardsCount = 4): ICard[] {
    return Array(cardsCount / 2)
      .fill(null)
      .reduce(acc => {
        const card1 = {
          id: this.idCounter++,
          frontSide: 'assets/img/front/christmas/0.jpg',
          backSide: 'assets/img/back/42.jpg',
          isOpened: false,
          isRemoved: false,
        };

        const card2 = {...card1, id: this.idCounter++};

        acc.push(card1);
        acc.push(card2);

        return acc;
      }, []);
  }
}

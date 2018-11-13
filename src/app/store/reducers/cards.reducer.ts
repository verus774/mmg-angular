import * as _ from 'lodash';

import {ICard} from '../../card/card.model';
import * as CardsActions from '../actions/cards.actions';

const initialState: ICard[] = [];
let idCounter = 1;

export function cardsReducer(state: ICard[] = initialState, action: CardsActions.Actions) {
  switch (action.type) {
    case CardsActions.GENERATE_CARDS:
      const {cardsCount, backSide, frontImgDir} = action.payload;

      return _.shuffle(
        Array(cardsCount / 2)
          .fill(null)
          .reduce((acc, cur, idx) => {
            const card1 = {
              id: idCounter++,
              frontSide: `${frontImgDir}/${idx}.jpg`,
              backSide,
              isOpened: false,
              isRemoved: false,
            };

            const card2 = {...card1, id: idCounter++};

            acc.push(card1);
            acc.push(card2);

            return acc;
          }, [])
      );
    default:
      return state;
  }
}

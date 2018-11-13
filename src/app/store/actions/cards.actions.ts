import {Action} from '@ngrx/store';

export const GENERATE_CARDS = 'GENERATE_CARDS';
export const OPEN_CARD = 'OPEN_CARD';

export class GenerateCards implements Action {
  readonly type = GENERATE_CARDS;

  constructor(public payload: {
    cardsCount: number,
    backSide: string,
    frontImgDir: string,
  }) {
  }
}

export class OpenCard implements Action {
  readonly type = OPEN_CARD;

  constructor(public payload: string | number) {
  }
}

export type Actions = GenerateCards | OpenCard;

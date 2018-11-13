import {Action} from '@ngrx/store';

export const GENERATE_CARDS = 'GENERATE_CARDS';

export class GenerateCards implements Action {
  readonly type = GENERATE_CARDS;

  constructor(public payload: {
    cardsCount: number,
    backSide: string,
    frontImgDir: string,
  }) {
  }
}

export type Actions = GenerateCards;

import {Component, OnInit} from '@angular/core';
import {ICard} from '../card/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards: ICard[] = [
    {
      id: 1,
      frontSide: 'assets/img/front/christmas/0.jpg',
      backSide: 'assets/img/back/42.jpg',
      isOpened: false,
      isRemoved: false,
    },
    {
      id: 2,
      frontSide: 'assets/img/front/christmas/1.jpg',
      backSide: 'assets/img/back/42.jpg',
      isOpened: false,
      isRemoved: false,
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

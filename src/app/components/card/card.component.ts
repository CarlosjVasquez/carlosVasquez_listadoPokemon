import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  @Input() color:
    | string
    | 'black'
    | 'blue'
    | 'brown'
    | 'gray'
    | 'green'
    | 'pink'
    | 'purple'
    | 'red'
    | 'white'
    | 'yellow';
  @Input() urlimg: string;

  constructor() {
    this.color = 'white';
    this.urlimg = '';
  }
}

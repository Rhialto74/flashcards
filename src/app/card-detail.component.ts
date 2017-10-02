import { Component, Input } from '@angular/core';
import { Card } from './card';

@Component({
  templateUrl: './card-detail.component.html',
  selector: 'card-detail',
})

export class CardDetailComponent {
  @Input() card: Card;
}

import { Component, Input, OnInit } from '@angular/core';
import { CardPresent } from './card-present.enum';

@Component({
  selector: 'app-card-present',
  templateUrl: './card-present.component.html',
  styleUrls: ['./card-present.component.css']
})
export class CardPresentComponent implements OnInit {
  CardPresent = CardPresent;

  @Input() cardPresent: CardPresent = CardPresent.Loading;

  constructor() { }

  ngOnInit(): void {

  }
}

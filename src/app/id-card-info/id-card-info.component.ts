import { Component, Input, OnInit } from '@angular/core';
import { IdCardInfo } from './id-card-info.interface';

@Component({
  selector: 'app-id-card-info',
  templateUrl: './id-card-info.component.html',
  styleUrls: ['./id-card-info.component.css']
})
export class IdCardInfoComponent implements OnInit {
  @Input() idCardInfo: IdCardInfo | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

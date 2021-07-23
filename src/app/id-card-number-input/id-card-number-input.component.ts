import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-card-number-input',
  templateUrl: './id-card-number-input.component.html',
  styleUrls: ['./id-card-number-input.component.css']
})
export class IdCardNumberInputComponent implements OnInit {
  idCardNumber: string = "";
  @Output() idCardNumberEvent = new EventEmitter<string>();

  constructor() { }

  onChange(event: any) {
    if(this.idCardNumber.length == 12) {
      this.idCardNumberEvent.emit(this.idCardNumber);
    }    
  }

  ngOnInit(): void {
  }

}

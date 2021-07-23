import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardNumberInputComponent } from './id-card-number-input.component';

describe('IdCardNumberInputComponent', () => {
  let component: IdCardNumberInputComponent;
  let fixture: ComponentFixture<IdCardNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCardNumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCardNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

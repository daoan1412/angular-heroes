import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CardPresentComponent } from './card-present/card-present.component';
import { IdCardNumberInputComponent } from './id-card-number-input/id-card-number-input.component';
import { IdCardInfoComponent } from './id-card-info/id-card-info.component';

@NgModule({
  declarations: [
    HerosComponent,
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    CardPresentComponent,
    IdCardNumberInputComponent,
    IdCardInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

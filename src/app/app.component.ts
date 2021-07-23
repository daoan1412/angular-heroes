import { Component, Input, OnInit } from '@angular/core';
import { CompatClient, Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { CardPresent } from './card-present/card-present.enum';
import { IdCardInfo } from './id-card-info/id-card-info.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ứng dụng đọc thông tin thẻ căn cước công dân gắn chip.';

  private stompClient: CompatClient | null = null;
  public isCardPresent: boolean | null = null;
  public cardPresent: CardPresent = CardPresent.Loading;
  public idCardInfo: IdCardInfo | null = null;

  ngOnInit() {
    this.connect();
  }

  setConnected(connected: boolean) {

  }

  connect() {
    const socket = new SockJS('http://localhost:8081/websocket');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
      _this.stompClient?.subscribe('/topic/cardStatus', function (res) {
        const currentCardPresent = JSON.parse(res.body).cardPresent;
        if (_this.isCardPresent == null && currentCardPresent) {
          _this.cardPresent = CardPresent.NeedRemove;
        } else if (!currentCardPresent) {
          _this.cardPresent = CardPresent.CardAbsent;
        } else {
          _this.cardPresent = CardPresent.CardPresent;
        }
        _this.isCardPresent = currentCardPresent;
      });
      _this.stompClient?.subscribe('/topic/result', function (res) {
        console.log(JSON.parse(res.body));
        _this.idCardInfo = JSON.parse(res.body).person;
      });
      _this.getCardStatus();
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  getCardStatus() {
    this.stompClient?.send(
      '/send/getCardStatus',
      {},
      ""
    );
  }

  onSubmit(idCardNumber: string) {
    this.stompClient?.send(
      '/send/idCardNumber',
      {},
      JSON.stringify({idCardNumber })
    );
  }

}

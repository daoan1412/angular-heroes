import { Component, OnInit } from '@angular/core';
import { CompatClient, Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  private stompClient: CompatClient | null = null;

  ngOnInit() {
    this.connect();
  }

  setConnected(connected: boolean) {

  }

  connect() {
    const socket = new SockJS('http://localhost:8081/gkz-stomp-endpoint');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient?.subscribe('/topic/hi', function (hello) {
        console.log(hello);
        // _this.showGreeting(JSON.parse(hello.body).greeting);
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    this.stompClient?.send(
      '/gkz/hello',
      {},
      JSON.stringify({ from: "client", text: "xin chao" })
    );
  }


}

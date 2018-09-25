import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  messages = [];
  connection: any;
  user: string;
  transmission: string;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.connection = this._chatService.getTraffic().subscribe(data => {
      this.messages.push(data);
      console.log('From Server: ', data);
    })
  }

  sendUser(){
    this._chatService.sendUser(this.user);
    console.log('Element:', this.user);
  }

  sendTraffic(){
    this._chatService.relayTraffic(this.transmission);
    this.transmission = '';
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}

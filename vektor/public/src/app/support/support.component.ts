import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  messages = [];
  connection: any;
  message: any;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log('From Server: ', message);
    })
  }

  // userName(){
  //   this._chatService.sendName(this.name);
  //   console.log('User name:', this.name)
  //   // this.name = '';
  // }

  sendMessage(){
    this._chatService.relayMessage(this.message);
    console.log('Message for ya:', this.message)
    this.message = '';
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}

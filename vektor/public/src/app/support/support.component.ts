import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  messages = [];
  connection;
  message;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  sendMessage(){
    this._chatService.sendMessage(this.message);
    console.log('Message for ya:', this.message)
    this.message = '';
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}

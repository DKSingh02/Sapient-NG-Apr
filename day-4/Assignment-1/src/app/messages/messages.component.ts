import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  errorMessages: string[];
  constructor(public messageService: MessageService) {
    this.errorMessages = this.messageService.messages;
  }
  clearErrorMsg() : void {
    this.messageService.clear();
    this.errorMessages = [];
  }
}

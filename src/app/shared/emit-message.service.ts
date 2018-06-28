import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitMessageService {

  messageEvent = new EventEmitter();

  constructor() { }

  sendMessage(msg: string) {
    setTimeout(() => {
      this.messageEvent.emit(msg);
    }, 100);
  }
  
}

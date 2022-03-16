import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferences: any[] = [];


  transfer($event) {
    console.log($event)
    const transfer = {...$event, data: new Date()}
    this.transferences.push(transfer)
  }
}

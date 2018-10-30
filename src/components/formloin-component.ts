import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

const HTML_TEMPLATE = `
<ion-content padding>
    <ion-item>
      <ion-input required type="text" placeholder="๊Username" [(ngModel)]="data.username"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input required type="password" placeholder="password" [(ngModel)]="data.password"></ion-input>
    </ion-item>
  <ion-button expand="block" (click)="clickButton()">{{textButton}}</ion-button>
  </ion-content>
`;

const CSS_STYLE = ``;

@Component({
  selector: 'formlogin-component',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class FormloginComponent implements OnInit {
  data: any = {};
  @Input() textButton = "LOGIN";
  @Output() dataUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.dataUser.emit(this.data);
  }
}
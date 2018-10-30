var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var HTML_TEMPLATE = "\n<ion-content padding>\n    <ion-item>\n      <ion-input required type=\"text\" placeholder=\"\u0E4AUsername\" [(ngModel)]=\"data.username\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input required type=\"password\" placeholder=\"password\" [(ngModel)]=\"data.password\"></ion-input>\n    </ion-item>\n  <ion-button expand=\"block\" (click)=\"clickButton()\">{{textButton}}</ion-button>\n  </ion-content>\n";
var CSS_STYLE = "";
var FormloginComponent = /** @class */ (function () {
    function FormloginComponent() {
        this.data = {};
        this.textButton = "LOGIN";
        this.dataUser = new EventEmitter();
    }
    FormloginComponent.prototype.ngOnInit = function () {
    };
    FormloginComponent.prototype.clickButton = function () {
        this.dataUser.emit(this.data);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormloginComponent.prototype, "textButton", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormloginComponent.prototype, "dataUser", void 0);
    FormloginComponent = __decorate([
        Component({
            selector: 'formlogin-component',
            template: HTML_TEMPLATE,
            styles: [CSS_STYLE]
        }),
        __metadata("design:paramtypes", [])
    ], FormloginComponent);
    return FormloginComponent;
}());
export { FormloginComponent };
//# sourceMappingURL=formloin-component.js.map
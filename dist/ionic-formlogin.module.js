var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormloginComponent } from './components/formloin-component';
import { FormloginProvider } from './providers/formlogin-provider';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
var IonicFormloginModule = /** @class */ (function () {
    function IonicFormloginModule() {
    }
    IonicFormloginModule_1 = IonicFormloginModule;
    IonicFormloginModule.forRoot = function () {
        return {
            ngModule: IonicFormloginModule_1,
            providers: [FormloginProvider]
        };
    };
    var IonicFormloginModule_1;
    IonicFormloginModule = IonicFormloginModule_1 = __decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule
            ],
            declarations: [
                FormloginComponent
            ],
            exports: [
                FormloginComponent
            ]
        })
    ], IonicFormloginModule);
    return IonicFormloginModule;
}());
export { IonicFormloginModule };
//# sourceMappingURL=ionic-formlogin.module.js.map
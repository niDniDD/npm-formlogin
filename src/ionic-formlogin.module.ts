import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormloginComponent } from './components/formloin-component';
import { FormloginProvider } from './providers/formlogin-provider';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

 
@NgModule({
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
export class IonicFormloginModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicFormloginModule,
            providers: [FormloginProvider]
        };
    }
}
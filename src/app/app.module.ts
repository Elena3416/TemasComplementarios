import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './home/components/pipes/pipes.component';
import { CheckexistImagePipe } from "./home/components/pipes/checkexist-image.pipe";
import { ChangePasswordPipe } from './home/components/pipes/change-password.pipe';
import { MultiplicacionNumericaPipe } from './home/components/pipes/multiplicacion-numerica.pipe';
import { NgSwitchComponent } from './home/components/directivas/ng-switch/ng-switch.component';
import { NgClassComponent } from './home/components/directivas/ng-class/ng-class.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { RandomColorDirective } from './home/components/directivas/random-color.directive';
import { RxJSRepasoComponent } from './home/rx-jsrepaso/rx-jsrepaso.component';
import { ChangeColorDirective } from "./home/components/directivas/change-color.directive";
import { ChangeColorInputDirective } from './home/components/directivas/change-color-input.directive';
import { PadreComponent } from './home/components/ComunicacionEntreComponentes/Ejercicio1/padre/padre.component';
import { Hijo1Component } from './home/components/ComunicacionEntreComponentes/Ejercicio1/hijo1/hijo1.component';
import { Padre2Component } from './home/components/ComunicacionEntreComponentes/Repaso/padre2/padre2.component';
import { Hijo2Component } from './home/components/ComunicacionEntreComponentes/Repaso/hijo2/hijo2.component';
import { ComponentsComponent } from './home/components.component'
import {APP_ROUTES} from "./angular.routes";

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CheckexistImagePipe,
    ChangePasswordPipe,
    MultiplicacionNumericaPipe,
    NgSwitchComponent,
    NgClassComponent,
    NavbarComponent,
    RandomColorDirective,
    RxJSRepasoComponent,
    ChangeColorDirective,
    ChangeColorInputDirective,
    PadreComponent,
    Hijo1Component,
    Padre2Component,
    Hijo2Component,
    ComponentsComponent,
    ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

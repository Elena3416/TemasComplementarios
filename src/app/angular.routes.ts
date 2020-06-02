import { Routes, RouterModule }  from "@angular/router";
import { NavbarComponent } from "./home/components/navbar/navbar.component";
import { PipesComponent } from "./home/components/pipes/pipes.component";
import { NgClassComponent } from './home/components/directivas/ng-class/ng-class.component';
import { NgSwitchComponent } from './home/components/directivas/ng-switch/ng-switch.component';
import { Padre2Component } from './home/components/ComunicacionEntreComponentes/Repaso/padre2/padre2.component';
import { PadreComponent } from './home/components/ComunicacionEntreComponentes/Ejercicio1/padre/padre.component'
import { Hijo1Component } from './home/components/ComunicacionEntreComponentes/Ejercicio1/hijo1/hijo1.component';
import { Hijo2Component } from './home/components/ComunicacionEntreComponentes/Repaso/hijo2/hijo2.component';

const Rutas: Routes = [
    {path: '',component: NavbarComponent},
    {path: "pipe", component:PipesComponent},
    {path: "ngClass", component:NgClassComponent},
    {path: "ngSwitch", component:NgSwitchComponent},
    {path: "padre", component:PadreComponent },
    {path: "hijo1", component:Hijo1Component },
    {path: "padre2", component:Padre2Component },
    {path: "hijo2", component:Hijo2Component },
    {path: "**", pathMatch: "full", redirectTo: "navbar"},
];

export const APP_ROUTES = RouterModule.forRoot(Rutas);
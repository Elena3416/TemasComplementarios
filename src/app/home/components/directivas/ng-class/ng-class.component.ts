import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  public color:boolean = true;
  public people:any = [
    {
      name:"Douglas Pace",
      age:35,
      country: "MARS",
    },
    {
      name:"Laura Rubalcava",
      age:25,
      country: "MX",
    },
    {
      name:"Ricardo Peralta, Chino",
      age:23,
      country: "CH",
    },
    {
      name:"Jose Carlos",
      age:24,
      country: 'USA',
    },
    {
      name:"Cesar",
      age:27,
      country: 'SP',
    },
    {
      name:"Daniela",
      age:26,
      country: 'SP',
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  public GetColor(country:string){
    switch(country){
      case 'MX':
        return 'red';
      case 'CH':
        return 'blue';
      case 'USA':
        return 'purple';
      case 'SP':
        return 'gray';
      default:
        return 'brown';        
    }
  }
}

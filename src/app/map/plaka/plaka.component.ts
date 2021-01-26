import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plaka',
  templateUrl: './plaka.component.html',
  styleUrls: ['./plaka.component.css']
})
export class PlakaComponent implements OnInit {
  cities=[
    {id:1,name:"İstanbul"},
    {id:2,name:"Ankara"},
    {id:2,name:"İzmir"},
    {id:3,name:"Yozgat"},
    {id:4,name:"Çorum"},
    {id:5,name:"Bayburt"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

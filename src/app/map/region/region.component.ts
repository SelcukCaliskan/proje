import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
cities=[
  {id:1,name:"İstanbul"},
  {id:2,name:"Ankara"},
  {id:2,name:"İzmir"},
  {id:3,name:"Yozgat"},
  {id:4,name:"Çorum"},
  {id:5,name:"Bayburt"}
]

cityId=0;
cityName="";
  constructor() { }

  ngOnInit(): void {
  }

  save(value: any){
  const index = this.cities.findIndex(el=)
  }

}

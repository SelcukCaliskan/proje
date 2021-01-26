import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { RegionComponent } from './region/region.component';
import { MapComponent } from './map/map.component';
import { PlakaComponent } from './plaka/plaka.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  { path: "", component:MapComponent }
]

@NgModule({
  declarations: [CityComponent,
    PlakaComponent,
    RegionComponent,
    MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }


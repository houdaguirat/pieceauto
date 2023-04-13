import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueRoutingModule } from './marque-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MarqueRoutingModule
  ]
})
export class MarqueModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarqueRoutingModule } from './marque-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MarqueRoutingModule
  ]
})
export class MarqueModule { }

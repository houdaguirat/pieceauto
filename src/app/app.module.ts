import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarqueModule } from './marque/marque.module';
import { MarqueRoutingModule } from './marque/marque-routing.module';
import { PieceRoutingModule } from './piece/piece-routing.module';
import { TypeModule } from './type/type.module';
import { PieceModule } from './piece/piece.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarqueRoutingModule,
    HttpClientModule,
    TypeModule,
    PieceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

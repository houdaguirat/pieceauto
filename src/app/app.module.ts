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
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarqueRoutingModule,
    HttpClientModule,
    TypeModule,
    PieceModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

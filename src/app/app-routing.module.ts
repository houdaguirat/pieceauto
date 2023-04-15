import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Marque/home',
    pathMatch: 'full',
  },
  {
    path: 'Type',
    redirectTo: 'Type/home',
    pathMatch: 'full',
  },
  {
    path: 'Piece',
    redirectTo: 'Piece/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from '../type.service';
import { Type } from '../type';
import { MarqueService } from 'src/app/marque/marque.service';
import { Marque } from 'src/app/marque/marque';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  allMarques: Marque[] = [];
  typeForm: Type = {
    id: 0,
    name: '',
    annee:0,  
    marque:{
      id: 0,
      name: '',
      
    }   
  };
 
  constructor(private ts:TypeService,
    private mS:MarqueService,
    private router:Router) {}
 
  ngOnInit(): void {
    this.get();
  }

  get() {
    console.log("Get all marques ....");
    this.mS.getAll().subscribe((data) => {
      this.allMarques = data;
      console.log("data=",data);
    });
  }  
 
  create(){
    this.ts.create(this.typeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/Type/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

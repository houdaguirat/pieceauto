import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../type';
import { TypeService } from '../type.service';
import { Marque } from 'src/app/marque/marque';
import { MarqueService } from 'src/app/marque/marque.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private tS: TypeService,
      private mS: MarqueService
    ) {}
   
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getById(id);
        this.getMarques();
      });
    }
   
    getById(id: number) {
      this.tS.getById(id).subscribe((data) => {
        this.typeForm = data;
      });
    }

    getMarques(){
      console.log("Get all marques ....");
      this.mS.getAll().subscribe((data) => {
        this.allMarques = data;
        console.log("data=",data);
      });      
    }
   
    update() {
      this.tS.update(this.typeForm)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/Marque/home"]);
        },
        error:(err) => {
          console.log(err);
        }
      })
    }
  }

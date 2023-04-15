import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  typeForm: Type = {
    id: 0,
    name: '',
    annee:'',    
  };
 
  constructor(private ts:TypeService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
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

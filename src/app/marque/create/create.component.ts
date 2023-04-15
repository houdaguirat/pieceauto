import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarqueService } from '../marque.service';
import { Marque } from '../marque';

 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  marqueForm: Marque = {
    id: 0,
    name: '',
    
  };
 
  constructor(private ms:MarqueService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.ms.create(this.marqueForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/marque/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}

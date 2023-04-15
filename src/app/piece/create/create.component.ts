import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from '../piece';
import { PieceService } from '../piece.service';
import { TypeService } from 'src/app/type/type.service';
import { Type } from 'src/app/type/type';


 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  allTypes: Type[] = [];
  pieceForm: Piece = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    type:{
      id: 0,
      name: '',
      annee:0,  
      marque:{
        id: 0,
        name: '',
        
      }   
    }
  };
 
  constructor(private pS:PieceService,
    private tS:TypeService,
    private router:Router) {}
 
    ngOnInit(): void {
      this.get();
    }
  
    get() {
      console.log("Get all marques ....");
      this.tS.getAll().subscribe((data) => {
        this.allTypes = data;
        console.log("data=",data);
      });
    }  
 
  create(){
    this.pS.create(this.pieceForm)
    .subscribe({
      next:() => {
        this.router.navigate(["/Piece/home"])
      },
      error:(err: any) => {
        console.log(err);
      }
    })
  }
}

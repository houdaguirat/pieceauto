import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pieceService } from '../piece.service';
import { Piece, piece } from '../piece';

 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  pieceForm: Piece = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  };
 
  constructor(private ms:pieceService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.ms.create(this.pieceForm)
    .subscribe({
      next:() => {
        this.router.navigate(["/piece/home"])
      },
      error:(err: any) => {
        console.log(err);
      }
    })
  }
}

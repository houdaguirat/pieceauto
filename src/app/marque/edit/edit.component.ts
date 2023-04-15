import { Component, OnInit } from '@angular/core';
import { Marque } from '../marque';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from '../marque.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    MarqueForm: Marque = {
      id: 0,
      name: '',
    
    };
    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private cS: MarqueService
    ) {}
   
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getById(id);
      });
    }
   
    getById(id: number) {
      this.cS.getById(id).subscribe((data) => {
        this.MarqueForm = data;
      });
    }
   
    update() {
      this.cS.update(this.MarqueForm)
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

import { Component, OnInit } from '@angular/core';
import { Marque } from '../marque';
import { MarqueService } from '../marque.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.mSs']
})
export class HomeComponent implements OnInit {
    allMarque: Marque[] = [];
    deleteModal: any;
    idTodelete: number = 0;
   
    constructor(private mS: MarqueService) {}
    ngOnInit(): void {
       this.deleteModal = new window.bootstrap.Modal(
        document.getElementById('deleteModal')
      );
      this.get();
    }
   
    get() {
      this.mS.getAll().subscribe((data) => {
        this.allMarque = data;
        console.log("data=",data);
      });
    }
    openDeleteModal(id: number) {
      this.idTodelete = id;
      this.deleteModal.show();
    }
   
    delete() {
      this.mS.delete(this.idTodelete).subscribe({
        next: (data) => {
          this.allMarque = this.allMarque.filter(_ => _.id != this.idTodelete)
          this.deleteModal.hide();
        },
      });
    }
  
  }
  
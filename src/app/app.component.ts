import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { TypeService } from '../type.service';
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allType: Type[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private TypeService: TypeService) {}
  ngOnInit(): void {
     this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.TypeService.getAll().subscribe((data: Type[]) => {
      this.allType = data;
      console.log("data=",data);
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.TypeService.delete(this.idTodelete).subscribe({
      next: () => {
        this.allType = this.allType.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}

import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { CrudServiceService } from '../../services/crud.service';

@Component({
  selector: 'app-getall',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetallComponent {
  products!: UserModel[];

  constructor(private CrudService: CrudServiceService) {}

  ngOnInit() {
      this.CrudService.getAll().subscribe({
        next:(data)=>{
          this.products=data;
          console.log(data)
        },
        error: (err)=>{
          console.log(err);
        }
      }) 
      

  }
}

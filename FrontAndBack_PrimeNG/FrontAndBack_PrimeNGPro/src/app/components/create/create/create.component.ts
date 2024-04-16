import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../../services/crud.service';
import { CreateUser } from '../../../models/createUser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  resultData! : CreateUser;

  setValue: CreateUser = {

  }

  constructor(private crudService: CrudServiceService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createUser(data: CreateUser) {
     this.crudService.create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
      },
      error: (err) => {
        console.log(`Error ketti: ${err}`);
      }
    });
  }

  setUser() {
    this.createUser(this.setValue);
    
  }




}
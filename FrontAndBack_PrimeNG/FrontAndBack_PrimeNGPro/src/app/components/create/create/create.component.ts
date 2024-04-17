
import { Component } from '@angular/core';
import { CrudServiceService, Message } from '../../../services/crud.service';
import { CreateUser } from '../../../models/createUser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
setValue:CreateUser={
  productName: "",
  categoryId:0,
  productPrice: 0,
  productDescription: "", 

}
resultdata!:Message;
isSubmited:boolean=false;
constructor(private crud:CrudServiceService){}
create(data:CreateUser){
this.crud.create(data).subscribe({
  next: (res)=>{
    this.resultdata=res;
    this.isSubmited=true;
  },
  error: (err)=>{
    console.log(err);
  }
});
}
start(){
  this.create(this.setValue);
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  currentText: string = "This is text";

  items = ['test'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

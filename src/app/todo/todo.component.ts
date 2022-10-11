import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }
  items: string [] = ["bread" , "butter" , "chicken"];
  newItem: string = '';
  
  clicked: boolean [] = [false, false, false];
  ngOnInit(): void {
  }


 
strike(i: number){
  this.clicked[i] = !this.clicked[i];
}

addItem()
 {
  this.items.unshift(this.newItem);
  this.newItem ='';
 }  

}

import { Component, computed, EventEmitter, Input, input, Output, output, signal } from '@angular/core';

interface User{
  id:string;
  avatar:string;
  name:string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  // @Input() id!:string;
  // @Input() avatar!: string;
  // @Input() name!: string;
  @Input({required:true}) user!:User

  //signal input
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  
 @Output() select = new EventEmitter();
 //signal output
 //select = output<string>();
  
  selectedUser(){
    this.select.emit(this.user.id);
  }
}

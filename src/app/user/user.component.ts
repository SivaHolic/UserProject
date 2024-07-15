import { Component, computed, Input, input, signal } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // @Input() avatar!: string;
  // @Input() name!: string;

  avatar = input.required<string>();
  name = input.required<string>();
  
  
  selectedUser(){
    
  }
}

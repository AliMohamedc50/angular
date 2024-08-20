import { Component } from '@angular/core';

@Component({
  selector: 'app-tsak',
  templateUrl: './tsak.component.html',
  styleUrl: './tsak.component.scss'
})
export class TsakComponent {
  // task one
  userName:string= ""
  resetUserName() {
    this.userName = ""
  }

  // task two
  displayP:boolean = false

  clicks: number[] = []
  count:number = 1

  handleDisplayP() {
    this.displayP = !this.displayP
    if(this.displayP){
      this.clicks.push(this.count++)
    }
  }
}

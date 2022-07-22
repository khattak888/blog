import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angu',
  templateUrl: './angu.component.html',
  styleUrls: ['./angu.component.css']
})
export class AnguComponent  {

  getName(name:string){
    alert(name);
  }
  

  

}

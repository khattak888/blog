import { Component} from '@angular/core';

@Component({
  selector: '[app-demo]',
  template:`<h1>
        {{title}}
           </h1>`,
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  {
      title= "This is interpolation"
 
}

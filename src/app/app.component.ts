import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // getFunc(val:string) {
  //  console.warn(val)
  // }
  // title = "Get Input Box Value"
  // displayVal = '';
  // getValue(val:string){
  // console.warn(val);
  // this.displayVal = val
  
  // }

  // title="Counter Example"
  // count=0;
  // counter(type:string){
  //   type==='add' ?  this.count++ :  this.count--;
   
  // }

  // title="Basic styling in Angular"

  // title="Property Binding" 
  // name="bilal";
  // disable=false;
   
  // title="if else condition" 
  // show=true;
  
  // title=" Multiple if else condition"
  // color="green";

  // title="Switch Case";
  // color="xtf";

  // title="For Loop in Angular";
  // users = ['bilal','ubaid','hamza','fahad'];
  // userDetails = [
  //   {name:'bilal', email:'bilal@gmail.com', phone:'9999'},
  //   {name:'fahad', email:'fahad@gmail.com', phone:'999'},
  //   {name:'hamza', email:'hamza@gmail.com', phone:'99'},
  //   {name:'ubaid', email:'ubaid@gmail.com', phone:'97668'},
  //   {name:'wadood', email:'wadood@gmail.com', phone:'99778799'}

  // ]

  // title="Style Binding";
  // color="red";
  // bgColor = "yellow"

  // changeColor(){
  //   this.color="green"
  //   this.bgColor = "blue"
  // }

  // title = "Form in Angular"

  // title="send data parent to child component"
  // data=10;
  // updataData(){
  //   this.data = Math.floor(Math.random()*10)
  // }
  //  title = "Send data child to parent component"
  //  data="x"
  //  updateData(item:string){
  //  console.warn(item);
  //  this.data = item;
  //  }
  // title = "Two Way Binding"
  // name:any;
  // title = "Template Reference Variable"
  
//   getVal(item:HTMLInputElement){ 
//     console.warn(item);

   
//   }
// title = " Advance Pipes"
// today = Date();
// user = {
//   name:"bilal",
//   age:24
// }
// title = " Custom Pipes"
// title = "Template Driven Form"
// userLogin(item:any){
//   console.warn(item);
  
// }

title = "Reactive Form"
loginForm = new FormGroup({
  user: new FormControl('' , [Validators.required , Validators.email]),
  password: new FormControl('' ,[Validators.required ,Validators.minLength(6)])
})
userLogin(){
  console.warn(this.loginForm.value);
  
}
get user(){
  return this.loginForm.get('user')
}
get password(){
  return this.loginForm.get('password')
}
}

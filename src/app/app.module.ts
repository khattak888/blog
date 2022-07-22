import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module'
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { DemoComponent } from './demo/demo.component';
import { AnguComponent } from './angu/angu.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { UsdpkrPipe } from './pipes/usdpkr.pipe'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DemoComponent,
    AnguComponent,
    HeaderComponent,
    ChildComponent,
    UsdpkrPipe,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

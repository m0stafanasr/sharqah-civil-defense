import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [

    LoginoutingModule,
    SharedModule,

    // BrowserAnimationsModule,
    
  ]
})
export class LoginModule { }

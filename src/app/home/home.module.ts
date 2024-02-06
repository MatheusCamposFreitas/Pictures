import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SingupService } from './signup/singup.service';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VmessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule,
  ],
  providers: [SingupService]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule { }

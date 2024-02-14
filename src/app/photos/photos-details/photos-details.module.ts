import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDetailsComponent } from './photos-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from '../../shared/directives/show-if-logged/show-if-logged.module';



@NgModule({
  declarations: [
    PhotosDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  exports: [
    PhotosDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    ShowIfLoggedModule
  ]
})
export class PhotosDetailsModule { }

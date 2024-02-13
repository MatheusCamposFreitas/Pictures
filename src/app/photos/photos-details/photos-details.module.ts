import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDetailsComponent } from './photos-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../../shared/components/vmessage/vmessage.module';



@NgModule({
  declarations: [PhotosDetailsComponent, PhotoCommentsComponent],
  exports: [PhotosDetailsComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class PhotosDetailsModule { }

import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotosDetailsModule } from './photos-details/photos-details.module';



@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    PhotosDetailsModule
  ],
  declarations: [
  ]
})
export class PhotosModule { }

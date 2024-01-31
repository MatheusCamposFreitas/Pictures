import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { ErrosModule } from './erros/erros.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

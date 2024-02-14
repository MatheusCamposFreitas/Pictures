import { Component, Input, input } from '@angular/core';
import { enviroment } from '../../../enviroment/enviroment';

const cloud = `${enviroment.ApiUrl}imgs/`

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {

  private _url = '';

  @Input() description = '';

  @Input()
  set url(url: string) {

    if (!url.startsWith('data')) {
      this._url = cloud + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }
}

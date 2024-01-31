import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  @Input() description = '';
  @Input() url = '';
}

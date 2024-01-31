import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];

  rows: any[] = [];

  constructor() { }

  // Detecta alteração em Photos[] e se houver agrupa de 3 em 3 elementos
  ngOnChanges(changes: SimpleChanges) {
    if (changes['photos']) {
      this.rows = this.groupColums(this.photos);
    }
  }

  // itera no array em photos agrupando de 3 em 3 e retorna o novo array
  // Ex.: Entra -> [1, 2, 3, 4, 5, 6] - Retorna -> [[1, 2, 3], [4, 5, 6]]
  groupColums(photos: Photo[]) {
    const newRows = [];
    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }
    return newRows;
  }

}

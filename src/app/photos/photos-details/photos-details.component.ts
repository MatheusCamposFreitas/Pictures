import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrl: './photos-details.component.css'
})
export class PhotosDetailsComponent implements OnInit{
  
  photo$!: Observable<Photo>;
  photoId!: number;
  
  constructor(private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
  }

  remove(){
    this.photoService.removePhoto(this.photoId)
    .subscribe(() => this.router.navigate(['']));
  }
}

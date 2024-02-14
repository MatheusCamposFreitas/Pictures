import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { AlertService } from '../../shared/alert/alert.service';
import { UserService } from '../../core/user/user.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrl: './photos-details.component.css'
})
export class PhotosDetailsComponent implements OnInit {

  photo$!: Observable<Photo>;
  photoId!: number;

  constructor(private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params['photoId'];
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => { }, error => {
      this.router.navigate(['not-found']);
    })
  }

  remove() {
    this.photoService.removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success("Photo removed", true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      },
        err => {
          this.alertService.warning("Could not delete the photo", true)
        });
  }
}

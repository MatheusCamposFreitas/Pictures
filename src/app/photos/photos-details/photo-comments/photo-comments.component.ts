import { Component, Input, OnInit } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';
import { Observable, switchMap, tap } from 'rxjs';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrl: './photo-comments.component.css'
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId!: number;
  commentForm!: FormGroup;

  comments$!: Observable<PhotoComment[]>;

  constructor(private photoService: PhotoService,
    private fomBuilder: FormBuilder) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.fomBuilder.group({
      comment: ['', Validators.maxLength(255)]
    });
  }

  save() {
    const comment = this.commentForm.get('comment')?.value as string;

    this.comments$ = this.photoService.addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset()
      }));
  }
}

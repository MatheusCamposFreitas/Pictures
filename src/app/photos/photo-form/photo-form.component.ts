import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/alert/alert.service';
import { UserService } from '../../core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrl: './photo-form.component.css'
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup;

  file!: File;
  preview!: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(255)],
      allowComments: [true]
    });
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;

    this.photoService.upload(description, allowComments, this.file)
      .subscribe(() => {
        this.alertService.success("Upload complete", true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      });
  }

  onFileSelected(event: any) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
        const reader = new FileReader();
        reader.onload = (event: any) => this.preview = event.target?.result;
        reader.readAsDataURL(selectedFile);
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {

  loading$!: Observable<string>;

  constructor(
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.loading$ = this.loadingService.getLoading()
    .pipe(map(loadingType => loadingType.valueOf()));
  }

}

import { Injectable } from '@angular/core';
import { LoadingType } from './loading-type';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadinSubject = new Subject<LoadingType>();

  constructor() { }

  getLoading() {
    return this.loadinSubject.asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start() {
    this.loadinSubject.next(LoadingType.LOADING);
  }

  stop() {
    this.loadinSubject.next(LoadingType.STOPPED);
  }
}

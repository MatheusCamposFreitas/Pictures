import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alterSubject: Subject<Alert | null> = new Subject<Alert | null>();
  keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  success(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.INFO, message, keepAfterRouteChange);
  }

  private alert(alterType: AlertType, message: string, keepAfterRouteChange: boolean) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alterSubject.next(new Alert(alterType, message));
  }

  getAlert() {
    return this.alterSubject.asObservable();
  }

  clear() {
    this.alterSubject.next(null);
  }
}

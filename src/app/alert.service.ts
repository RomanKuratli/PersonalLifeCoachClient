import { Injectable } from '@angular/core';
import { Alert, AlertType } from 'src/app/alert/alert.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: Subject<Alert> = new Subject<Alert>();
  private cnt = 0;

  constructor() { }

  public getAlerts(): Subject<Alert> {
    return this.alerts;
  }

  private nextAlert(msg: string, type: AlertType) {
    this.alerts.next({msg, type, id: ++this.cnt});
  }

  public success(msg: string): void {
    this.nextAlert(msg, AlertType.Success);
  }

  public error(msg: string): void {
    this.nextAlert(msg, AlertType.Error);
  }

  public info(msg: string): void {
    this.nextAlert(msg, AlertType.Info);
  }

  public warning(msg: string): void {
    this.nextAlert(msg, AlertType.Warning);
  }

}

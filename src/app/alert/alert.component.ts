import { Component, OnInit } from '@angular/core';
import { AlertService} from 'src/app/alert.service';
import { Alert, AlertType} from 'src/app/alert/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlerts().subscribe(
      {
        next: (alert) => this.alerts.push(alert)
      }
    );
  }

  onClose(alert: Alert) {
    this.alerts.filter(a => alert !== a);
  }

  getCssClass(alert: Alert): string {
    switch (alert.type) {
      case AlertType.Success: return 'alert-success';
      case AlertType.Error: return 'alert-danger';
      case AlertType.Info: return 'alert-info';
      case AlertType.Warning: return 'alert-warning';
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/dataServices/config.service'
import { AlertService } from 'src/app/alert.service'
import { SetLocationData} from 'src/app/model/config.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  setLocationForm = {
    country: null,
    city: null,
    alpha2cd: null,
    long: null,
    lat: null
  }

  constructor(private configService: ConfigService, private alertService: AlertService) {}

  ngOnInit() {
  }

  onSetLocationSubmit() {
    console.log('setting location', this.setLocationForm);
    /*this.quotesService.insertQuote(this.formData).subscribe(
      quote => console.log('quote inserted: ' + quote),
      error => console.error('error inserting quote:', error)
    );*/
  }

}

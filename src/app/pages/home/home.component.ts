import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/pages/quotes/quotes.component';
import { QuotesService } from 'src/app/dataServices/quotes.service';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomQuote: Quote;

  constructor(private quoteService: QuotesService, private alertService: AlertService) { }

  ngOnInit() {
    this.quoteService.getRandomQuote().subscribe(
      (quote: Quote) => {
        this.randomQuote = quote;
        console.log('received random quote:', quote);
      },
      (error: any) => {
        this.alertService.error('Error fetching random quote');
        console.error('error fetching random quote: ' + error);
      }
    );
  }

}

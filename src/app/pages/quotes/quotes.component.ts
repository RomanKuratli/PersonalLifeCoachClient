import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/dataServices/quotes.service';

export interface Quote {
  _id?: string;
  quote_hash?: number;
  lang: string;
  quote: string;
  author: string;
  source: string;
}

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = null;

  formData: Quote = {
    lang: 'de',
    quote: null,
    author: null,
    source: null
  };

  constructor(private quotesService: QuotesService) {
    console.log('src/app/pages/quotes.component.ts: constructor called');
    console.log(this.quotesService);
    console.log(this.quotesService.getQuotes);
  }

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(
      (quotes: Quote[]) => this.quotes = quotes
    );
  }

  onSubmit() {
    console.log('inserting quote', this.formData);
    this.quotesService.insertQuote(this.formData).subscribe(
      quote => console.log('quote inserted: ' + quote),
      error => console.error('error inserting quote:', error)
    );
  }

  onDeleteBtnClicked(quoteId: string) {
    console.log('delete quote with id: ' + quoteId);
    this.quotesService.deleteQuote(quoteId).subscribe(
      () => { // success path
        this.quotes = this.quotes.filter((quote) => quote._id !== quoteId);
        console.log('quote deleted with id: ' + quoteId);
      },
      error => console.error('error deleting quote:', error)
    );
  }
}

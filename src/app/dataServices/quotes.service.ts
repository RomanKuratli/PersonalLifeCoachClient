import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/AppConstants';
import { Quote} from 'src/app/model/quote.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private quotesUrl: string = AppConstants.apiEndpoint + '/quotes';

  constructor(private http: HttpClient) { }

  public getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl);
  }

  public getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.quotesUrl + '/random');
  }

  public insertQuote(quote: Quote) {
    return this.http.post<Quote>(this.quotesUrl, quote);
  }

  public deleteQuote(quoteId: string): Observable<{}> {
    return this.http.delete(`${this.quotesUrl}/${quoteId}`);
  }
}

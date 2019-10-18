import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/AppConstants';
import { Quote} from 'src/app/model/quote.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configUrl: string = AppConstants.apiEndpoint + '/config';

  constructor(private http: HttpClient) { }

  public getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.configUrl);
  }

  public getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.configUrl + '/random');
  }

  public insertQuote(quote: Quote) {
    return this.http.post<Quote>(this.configUrl, quote);
  }

  public deleteQuote(quoteId: string): Observable<{}> {
    return this.http.delete(`${this.configUrl}/${quoteId}`);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/pages/quotes/quotes.component';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {

  @Input() quote: Quote;

  constructor() {}

  ngOnInit() {}

}
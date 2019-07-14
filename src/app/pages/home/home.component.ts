import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote.model';
import { QuotesService } from 'src/app/dataServices/quotes.service';
import { AlertService } from 'src/app/alert.service';
import { DiaryEntry } from 'src/app/model/diaryEntry.model';
import { DiaryService } from 'src/app/dataServices/diary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomQuote: Quote;
  goodDay: DiaryEntry;
  newDiaryEntry = {
    entryDate: null,
    entriesDataArea: ""
  }

  constructor(private quoteService: QuotesService,
              private diaryService: DiaryService,
              private alertService: AlertService) { }

  onSubmit() {
    console.log('HomeComponnent.onSubmit():', this.newDiaryEntry)
    // create new DiaryEntry object with form data
    let newEntry: DiaryEntry = {
      entry_date: this.newDiaryEntry.entryDate,
      entries: this.newDiaryEntry.entriesDataArea.split('\n')
    }
    console.log('sending the following object:', newEntry)
    this.diaryService.insertDiaryEntry(newEntry).subscribe(
      quote => {
        console.log('quote inserted: ' + quote)
        this.alertService.success('Successfully inserted new diary entry')
      },
      error => {
        console.error('error inserting quote:', error)
        this.alertService.error('Error inserting quoate (more details in console)')
      }
    )
  }

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

    this.diaryService.getGoodDay().subscribe(
      (diaryEntry: DiaryEntry) => {
        this.goodDay = diaryEntry;
        console.log('received good day diary entry:', diaryEntry);
      },
      (error: any) => {
        this.alertService.error('Error fetching good day diary entry');
        console.error('error fetching good day diary entry: ' + error);
      }
    );
  }

}

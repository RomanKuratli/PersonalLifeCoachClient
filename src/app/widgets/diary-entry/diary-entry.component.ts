import { Component, OnInit, Input } from '@angular/core';
import { DiaryEntry  } from 'src/app/model/diaryEntry.model';

const WeekDayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
const MonthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.css']
})
export class DiaryEntryComponent implements OnInit {

  @Input()diaryEntry: DiaryEntry;
  entryDate: Date;
  formattedEntryDate: String;
  galleryId: String;

  constructor() { }

  ngOnInit() {
    console.log('DiaryEntry Component ngOnInit():', this.diaryEntry);
    console.log('this.diaryEntry.entryDate:', this.diaryEntry.entry_date)
    this.entryDate = new Date(this.diaryEntry.entry_date);
    console.log('this.entryDate:', this.entryDate)
    this.formattedEntryDate = this.formatDate(this.entryDate)
    console.log('formatted date:', this.formattedEntryDate);
    this.galleryId = `gallery_${this.entryDate.getFullYear()}_${this.entryDate.getMonth() + 1}_${this.entryDate.getDay()}`;
    console.log('this.galleryId:', this.galleryId)
  }

  private formatDate(d: Date): String {
    return `${WeekDayNames[d.getDay()]}, ${d.getDate()}.${MonthNames[d.getMonth()]}.${d.getFullYear()}`
  }

  onDropPictures() {

  }

}

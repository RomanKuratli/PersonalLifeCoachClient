import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from 'src/app/model/diaryEntry.model'
import { DiaryService} from 'src/app/dataServices/diary.service'
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaryEntries: DiaryEntry[];

  constructor(private diaryService: DiaryService, private alertService: AlertService) { }

  ngOnInit() {
    this.diaryService.getDiary().subscribe(
      (diaryEntries: DiaryEntry[]) => this.diaryEntries = diaryEntries,
      (error: any) => {
        this.alertService.error('error getting diary entries');
        console.error('error getting diary entries', error);
      }
    );
  }

}

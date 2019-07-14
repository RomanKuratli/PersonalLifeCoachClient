import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/AppConstants';
import { DiaryEntry} from 'src/app/model/diaryEntry.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private diaryUrl: string = AppConstants.apiEndpoint + '/diary';

  constructor(private http: HttpClient) { }

  public getDiary(): Observable<DiaryEntry[]> {
    return this.http.get<DiaryEntry[]>(this.diaryUrl);
  }

  public getGoodDay(): Observable<DiaryEntry> {
    return this.http.get<DiaryEntry>(this.diaryUrl + '/goodDay');
  }

  public insertDiaryEntry(diaryEntry: DiaryEntry) {
    return this.http.post<DiaryEntry>(this.diaryUrl, diaryEntry);
  }
}

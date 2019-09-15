import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diary-picture',
  templateUrl: './diary-picture.component.html',
  styleUrls: ['./diary-picture.component.css']
})
export class DiaryPictureComponent implements OnInit {

  @Input()pictureUrl: String;
  pictureHovered: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMouseOver() {
    console.log('mouse over picture!')
  }

  onMouseOut() {
    console.log('mouse out of picture!')
  }

}

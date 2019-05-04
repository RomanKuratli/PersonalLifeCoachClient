import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  lineWidth = 3;
  private innerStrk: object;
  private outerStrk: string;

  @Input() innerColor: string;
  @Input() outerColor: string;
  @Input() background: string;
  @Input() size: number;

  innerStrkObj = {'stroke': this.innerColor, 'stroke-width': this.lineWidth };

  innerStroke(): object {
    if (!this.innerStrk) {
      this.innerStrk = {'stroke': this.innerColor, 'stroke-width': this.lineWidth };
    }
    return this.innerStrk;
  }

  outerStroke(): string {
    if (!this.outerStrk) {
      this.outerStrk = `"stroke:${this.outerColor}; stroke-width:${this.lineWidth};"`;
    }
    return this.outerStrk;
  }

  getScaleRatio(): string {
    return `scale(${this.size / 200})`;
  }

  constructor() { }

  ngOnInit() {
  }

}

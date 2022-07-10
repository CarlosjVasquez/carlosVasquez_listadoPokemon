import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
})
export class LoadingComponent implements OnInit {
  @Input() size: number = 0;
  width: string = '0px';
  borderWidth: string = '0px';
  constructor() {}

  ngOnInit(): void {
    this.width = this.formatStyle(this.size);
    this.getBorderWidth();
  }

  getBorderWidth() {
    this.borderWidth = this.formatStyle(this.size / 3);
  }
  formatStyle(param: number | string) {
    return (param + 'px') as string;
  }
}

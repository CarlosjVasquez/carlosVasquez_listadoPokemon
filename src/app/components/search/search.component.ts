import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  @Output() searchChange;

  constructor() {
    this.searchChange = new EventEmitter<string>();
  }

  inputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchChange.emit(value);
  }
}

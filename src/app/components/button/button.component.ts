import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
  @Output() onClick: EventEmitter<void>;

  constructor() {
    this.text = 'Button';
    this.disabled = false;
    this.onClick = new EventEmitter();
  }

  handleClick() {
    this.onClick.emit();
  }
}

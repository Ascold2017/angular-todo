import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input()
  type: HTMLInputElement['type'] = 'button';
  @Output()
  click = new EventEmitter()

  onClick() {
    this.click.emit()
  }
}

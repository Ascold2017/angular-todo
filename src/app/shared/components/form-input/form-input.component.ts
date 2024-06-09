import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FormInputComponent {
  @Input() label = '';
  @Input() control!: FormControl
  @Input() type: HTMLInputElement['type'] = 'text'

  get errors () {
    if (!this.control.touched) return []
    return this.control?.errors ? Object.keys(this.control.errors!) : []
  }
}

import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() label = '';
  @Input() control!: FormControl

  get errors () {
    if (!this.control.touched) return []
    return this.control?.errors ? Object.keys(this.control.errors!) : []
  }
}

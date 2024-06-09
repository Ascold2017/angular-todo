import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormInputComponent} from "./components/form-input/form-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MasonryGridComponent } from './components/masonry-grid/masonry-grid.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    FormInputComponent,
    MasonryGridComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormInputComponent,
    MasonryGridComponent,
    ButtonComponent
  ]
})
export class SharedModule { }

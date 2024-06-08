import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormInputComponent} from "./components/form-input/form-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MasonryGridComponent } from './components/masonry-grid/masonry-grid.component';



@NgModule({
  declarations: [
    FormInputComponent,
    MasonryGridComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormInputComponent,
    MasonryGridComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
		MatInputModule,
		MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
  ]
})
export class InputModule { }

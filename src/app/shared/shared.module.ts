import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'app/shared/input/input.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { RatingComponent } from 'app/shared/rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports : [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule, //contém os *ngIf *ngFor e outros componentes de função angular
    FormsModule, 
    ReactiveFormsModule
 
  ]  
})
export class SharedModule { }

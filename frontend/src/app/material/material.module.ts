import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatGridListModule, 
          MatCardModule,
          MatButtonModule,
          MatTableModule,
          MatInputModule,
          MatRadioModule,
          MatDatepickerModule,
          MatNativeDateModule, 
          MatToolbarModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule

  ],
  exports:[
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule

  ]
})
export class MaterialModule { }

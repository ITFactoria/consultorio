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
          MatToolbarModule, 
          MatSelectBase,
          MatSelectModule,
          MatPaginatorModule,
          MatSortModule,
        } from "@angular/material";

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
    MatToolbarModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule
    
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
    MatToolbarModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule

  ]
})
export class MaterialModule { }

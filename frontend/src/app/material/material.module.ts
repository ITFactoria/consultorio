import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatGridListModule, 
          MatCardModule,
          MatButtonModule,
          MatTableModule,
          MatInputModule,
          MatRadioModule,
          MatDatepickerModule,
          MatToolbarModule, 
          MatSelectBase,
          MatSelectModule,
          MatPaginatorModule,
          MatSortModule,
          MatNativeDateModule
          
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
    MatToolbarModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule
    
  ],
  exports:[
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule

  ]
})
export class MaterialModule { }

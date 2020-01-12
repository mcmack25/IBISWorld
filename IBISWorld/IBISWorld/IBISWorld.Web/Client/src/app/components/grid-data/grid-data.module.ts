import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { GridDataComponent } from './grid-data.component';



@NgModule({
  imports: [
      CommonModule,
      TableModule
    ],

    declarations: [GridDataComponent],

    exports: [GridDataComponent]


})
export class GridDataModule { }

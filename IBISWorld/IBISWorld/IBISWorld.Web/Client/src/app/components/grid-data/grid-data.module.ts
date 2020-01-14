import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { GridDataComponent } from './grid-data.component';

import { LoadingModule } from 'ngx-loading';



@NgModule({
  imports: [
      CommonModule,
        TableModule,
        LoadingModule
    ],

    declarations: [GridDataComponent],

    exports: [GridDataComponent]


})
export class GridDataModule { }

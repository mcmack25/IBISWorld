import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridDataComponent } from './../../components/grid-data/grid-data.component';
import { TableModule } from 'primeng/table';
import { HomeContainer } from './home.container.component';
import { GridDataModule } from './../../components/grid-data/grid-data.module'



@NgModule({
    declarations: [HomeContainer],
  imports: [
      CommonModule,
      TableModule,
      GridDataModule
    ],
    exports: [
        HomeContainer
    ]
  
})
export class HomeContainerModule { }

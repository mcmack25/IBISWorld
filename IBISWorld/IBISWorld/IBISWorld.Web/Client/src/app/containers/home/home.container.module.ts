import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { GridDataComponent } from './../../components/grid-data/grid-data.component';
import { TableModule } from 'primeng/table';
import { HomeContainer } from './home.container.component';
import { GridDataModule } from './../../components/grid-data/grid-data.module';
import { ButtonModule } from 'primeng/button';



@NgModule({
    declarations: [HomeContainer],
  imports: [
      CommonModule,
      TableModule,
      GridDataModule,
      HttpClientModule,
      ButtonModule
    ],
    exports: [
        HomeContainer
    ]
  
})
export class HomeContainerModule { }

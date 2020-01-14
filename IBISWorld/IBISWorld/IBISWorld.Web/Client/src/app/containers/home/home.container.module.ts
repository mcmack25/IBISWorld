import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { GridDataComponent } from './../../components/grid-data/grid-data.component';
import { HomeContainer } from './home.container.component';
import { GridDataModule } from './../../components/grid-data/grid-data.module';



import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [HomeContainer],
  imports: [
      CommonModule,
      TableModule,
      GridDataModule,
      HttpClientModule,
      ButtonModule,
      DialogModule,
      InputTextareaModule,
      InputTextModule,
      FormsModule
    ],
    exports: [
        HomeContainer
    ]
  
})
export class HomeContainerModule { }

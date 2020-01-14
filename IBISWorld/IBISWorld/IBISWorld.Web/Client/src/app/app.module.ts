import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GridDataComponent } from './components/grid-data/grid-data.component';
import { HomeContainerModule } from './containers/home/home.container.module';
import { HomeStoreService } from '../app/services/home-store.service';
import { FormsModule } from '@angular/forms';

import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      routing,
      HomeContainerModule,
      LoadingModule
  ],
    providers: [HomeStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

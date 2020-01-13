import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GridDataComponent } from './components/grid-data/grid-data.component';
import { HomeContainerModule } from './containers/home/home.container.module';
import { HomeStoreService } from '../app/services/home-store.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HomeContainerModule
  ],
    providers: [HomeStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

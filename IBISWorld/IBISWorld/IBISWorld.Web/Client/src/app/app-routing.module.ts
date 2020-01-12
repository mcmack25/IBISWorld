import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainer } from './containers/home/home.container.component';


// Route Configuration
export const routes: Routes = ([
    { path: 'home', component: HomeContainer},
    { path: '**', component: HomeContainer }

]) as any;

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

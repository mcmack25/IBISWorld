import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { HomeContainer } from './home.container.component';
import { GridDataModule } from './../../components/grid-data/grid-data.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
let HomeContainerModule = class HomeContainerModule {
};
HomeContainerModule = __decorate([
    NgModule({
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
], HomeContainerModule);
export { HomeContainerModule };
//# sourceMappingURL=home.container.module.js.map
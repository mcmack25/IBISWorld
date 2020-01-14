import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { GridDataComponent } from './grid-data.component';
let GridDataModule = class GridDataModule {
};
GridDataModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            TableModule
        ],
        declarations: [GridDataComponent],
        exports: [GridDataComponent]
    })
], GridDataModule);
export { GridDataModule };
//# sourceMappingURL=grid-data.module.js.map
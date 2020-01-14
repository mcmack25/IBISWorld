import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GridDataComponent = class GridDataComponent {
    constructor() { }
    ngOnInit() {
        this.cols = [
            { field: 'Term', header: 'Term' },
            { field: 'Definition', header: 'Definition' },
            { field: 'DateAdded', header: 'DateAdded' }
        ];
    }
    ngOnChanges() {
        console.log("On Changes terms: ", this.glossary);
    }
};
__decorate([
    Input()
], GridDataComponent.prototype, "glossary", void 0);
GridDataComponent = __decorate([
    Component({
        selector: 'grid-data',
        templateUrl: './grid-data.component.html',
        styleUrls: ['./grid-data.component.css']
    })
], GridDataComponent);
export { GridDataComponent };
//# sourceMappingURL=grid-data.component.js.map
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeContainer = class HomeContainer {
    constructor(homeStore) {
        this.homeStore = homeStore;
    }
    ngOnInit() {
        this.homeStore.GetAllTerms();
    }
    handleClick() {
        console.log("Clickity Click");
    }
    addTerm() {
    }
    deleteTerm() {
    }
};
HomeContainer = __decorate([
    Component({
        selector: 'home-container',
        templateUrl: './home.container.component.html',
        styleUrls: ['./home.container.component.css']
    })
], HomeContainer);
export { HomeContainer };
//# sourceMappingURL=home.container.component.js.map
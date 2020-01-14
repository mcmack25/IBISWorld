import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
let HomeStoreService = class HomeStoreService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loading$ = new BehaviorSubject(false);
        this.terms$ = new BehaviorSubject(new Array());
    }
    GetAllTerms() {
        this.loading$.next(true);
        this.http.get(`api/home/GetTerms`)
            .subscribe((terms) => {
            console.log("Terms are here: ", terms);
            this.terms$.next(terms);
        }, (error) => {
            console.log(error);
        }, () => { this.loading$.next(false); });
    }
    GetTermByID(id) {
        this.loading$.next(true);
        this.http.get(`api/home/term/${id}`)
            .subscribe((terms) => {
            console.log("Terms are here: ", terms);
        }, (error) => {
            console.log(error);
        }, () => { this.loading$.next(false); });
    }
    EditTermByID() {
        this.loading$.next(true);
        this.http.get(`api/home/terms`)
            .subscribe((terms) => {
            console.log("Terms are here: ", terms);
        }, (error) => {
            console.log(error);
        }, () => { this.loading$.next(false); });
    }
    AddTerm() {
        this.loading$.next(true);
        this.http.get(`api/home/terms`)
            .subscribe((terms) => {
            console.log("Terms are here: ", terms);
        }, (error) => {
            console.log(error);
        }, () => { this.loading$.next(false); });
    }
    DeleteTerm() {
        this.loading$.next(true);
        //this.error$.next(new Error());
        this.http.get(`api/home/terms`)
            .subscribe((terms) => {
            console.log("Terms are here: ", terms);
        }, (error) => {
            console.log(error);
        }, () => { this.loading$.next(false); });
    }
};
HomeStoreService = __decorate([
    Injectable()
], HomeStoreService);
export { HomeStoreService };
//# sourceMappingURL=home-store.service.js.map
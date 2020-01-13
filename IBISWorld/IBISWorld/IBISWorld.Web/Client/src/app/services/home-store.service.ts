import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


import { Observable, BehaviorSubject } from "rxjs";
import { TermModel } from '../models/terms-model';




@Injectable()
export class HomeStoreService {

    constructor(private http: HttpClient, private router: Router) { }

    loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    terms$: BehaviorSubject<any[]> = new BehaviorSubject([]);


    GetAllTerms()
    {
        this.loading$.next(true);

        this.http.get(`api/home/GetTerms`)
            .subscribe((terms: any) => {

                console.log("Terms are here: ", terms);
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );
    }


    GetTermByID(id: number) {
        this.loading$.next(true);

        this.http.get(`api/home/term/${id}`)
            .subscribe((terms: any) => {

                console.log("Terms are here: ", terms);
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );
    }


    EditTermByID() {
        this.loading$.next(true);

        this.http.get(`api/home/terms`)
            .subscribe((terms: any) => {

                console.log("Terms are here: ", terms);
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );
    }

    AddTerm() {

        this.loading$.next(true);


        this.http.get(`api/home/terms`)
            .subscribe((terms: any) => {

                console.log("Terms are here: ", terms);
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );

    }


    DeleteTerm() {

        this.loading$.next(true);
        //this.error$.next(new Error());

        this.http.get(`api/home/terms`)
            .subscribe((terms: any) => {

                console.log("Terms are here: ", terms);
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );

    }











}

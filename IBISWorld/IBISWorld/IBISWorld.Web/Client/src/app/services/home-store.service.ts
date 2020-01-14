import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


import { Observable, BehaviorSubject } from "rxjs";
import { TermModel } from '../models/terms-model';

import * as moment from 'moment';




@Injectable()
export class HomeStoreService {

    constructor(private http: HttpClient, private router: Router) { }

    loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    terms$: BehaviorSubject<any[]> = new BehaviorSubject(new Array() );


    GetAllTerms()
    {
        this.loading$.next(true);

        this.http.get(`api/home/GetTerms`)
            .subscribe((terms: any[]) => {

                for (let term of terms) {
                    term.DateAdded = moment.utc(term.DateAdded).format("MM-DD-YYYY");
                }

                this.terms$.next(terms);
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


    EditTerm(editTerm: TermModel) {
        this.loading$.next(true);

        this.http.put(`api/home/EditTerm`, editTerm )
            .subscribe((terms: any) => {

                console.log("Terms are here: ", terms);
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );
    }

    AddTerm(newTerm: TermModel) {

        console.log("In the Service: ", newTerm);

        this.loading$.next(true);


        this.http.post(`api/home/AddTerm`, newTerm)
            .subscribe((terms: any) => {

                this.GetAllTerms();
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );

    }


    DeleteTerm(id: number) {

        this.loading$.next(true);

        this.http.get(`api/home/DeleteTerm/${id}`)
            .subscribe((terms: any) => {

                this.GetAllTerms();
            },
                (error: Response) => {
                    console.log(error);
                },
                () => { this.loading$.next(false); }
            );

    }











}

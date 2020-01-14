import { Component, OnInit } from '@angular/core';
import { HomeStoreService } from '../../services/home-store.service'
import { TermModel } from '../../models/terms-model';

@Component({
  selector: 'home-container',
    templateUrl: './home.container.component.html',
    styleUrls: ['./home.container.component.css']
})
export class HomeContainer implements OnInit {


    constructor(private homeStore: HomeStoreService) { }


    newTermObj: TermModel = new TermModel();
    editTermObj: TermModel = new TermModel();

    termObj: TermModel = new TermModel();

    editDisplay: boolean = false;
    deleteDisplay: boolean = false;
    addDisplay: boolean = false;

    disableBtn: boolean = true;

    ngOnInit() {

        this.homeStore.GetAllTerms();
    }


    handleClick() {

    }


    addTerm(term) {

        this.homeStore.AddTerm(term);

    }

    editTerm(term) {


        this.homeStore.EditTerm(term);

    }


    deleteTerm() {

        //this.homeStore.DeleteTerm();

    }

    loadEditData() {
        this.editTermObj = this.termObj;
    }


    handleGridSelect(selectedTerm) {

        this.termObj = selectedTerm;

    }

}




import { Component, OnInit } from '@angular/core';
import { HomeStoreService } from '../../services/home-store.service'

@Component({
  selector: 'home-container',
    templateUrl: './home.container.component.html',
    styleUrls: ['./home.container.component.css']
})
export class HomeContainer implements OnInit {


    constructor(private homeStore: HomeStoreService) { }

    ngOnInit() {

        //this.homeStore.GetAllTerms();
    }


    handleClick() {

        console.log("Clickity Click");
    }


}

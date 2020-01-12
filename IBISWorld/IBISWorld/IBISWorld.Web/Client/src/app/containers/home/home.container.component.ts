import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-container',
    templateUrl: './home.container.component.html',
    styleUrls: ['./home.container.component.css']
})
export class HomeContainer implements OnInit {

    cars: any[];


    constructor() { }

  ngOnInit() {
  }

}

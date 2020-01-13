import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.css']
})
export class GridDataComponent implements OnInit {

  constructor() { }


    cols: any[];

    ngOnInit() {

        this.cols = [
            { field: 'term', header: 'Term' },
            { field: 'definition', header: 'Definition' },
            { field: 'dateAdded', header: 'DateAdded' }
        ];

  }

}

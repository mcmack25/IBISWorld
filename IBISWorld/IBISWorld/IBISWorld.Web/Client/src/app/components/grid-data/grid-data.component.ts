import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { TermModel } from '../../models/terms-model';

@Component({
  selector: 'grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.css']
})
export class GridDataComponent implements OnInit {

    @Input() terms: any[];

  constructor() { }


    cols: any[];

    ngOnInit() {

       

        this.cols = [
            { field: 'Term', header: 'Term' },
            { field: 'Definition', header: 'Definition' },
            { field: 'DateAdded', header: 'DateAdded' }
        ];

    }



    ngOnChanges() {

        console.log("On Changes terms: ", this.terms);

    }

}

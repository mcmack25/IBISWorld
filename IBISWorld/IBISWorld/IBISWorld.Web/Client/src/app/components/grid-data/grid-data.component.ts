import { Component, OnInit, Input,OnChanges, EventEmitter, Output } from '@angular/core';
import { TermModel } from '../../models/terms-model';
import { HomeStoreService } from '../../services/home-store.service';


@Component({
  selector: 'grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.css']
})
export class GridDataComponent implements OnInit {

    @Input() glossary: any[];

    @Output()
    gridSelect: EventEmitter<any> = new EventEmitter();


    selectedTerm: TermModel = new TermModel();

    constructor(private homeStore: HomeStoreService) { }

    cols: any[];

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

    onGridSelect() {
        this.gridSelect.emit(this.selectedTerm);
    }

}

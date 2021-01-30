import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {CollectedData} from '../../models/CollectedData';
import {CollectionService} from '../../services/collection.service';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements AfterViewInit,OnChanges  {
  @Input() searchWord: string;
  displayedColumns: string[] = ['date', 'listName', 'noOfEntities', 'actions'];
  dataSource: MatTableDataSource<CollectedData> = new MatTableDataSource();
  selection = new SelectionModel<CollectedData>(false, []);
  currentRow: CollectedData;
  @ViewChild(MatSort) sort: MatSort;
  selectedDescriptions: String[];

  constructor(private collectionService:CollectionService){}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: CollectedData, filter: string) => {
      return data.listName.toLowerCase().indexOf(filter) !== -1;
     };
     this.dataSource = new MatTableDataSource(this.collectionService.getCollections());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchThis();
  }

  searchThis() {
    if(this.searchWord){
      this.searchWord = this.searchWord.trim();
      this.searchWord = this.searchWord.toLowerCase();
      this.dataSource.filter = this.searchWord;
    } else {
      this.dataSource.filter = this.searchWord;
    }
}
  
reset(row){
  if(this.currentRow !== row){
    this.selectedDescriptions = null;
  }
  
}
showDesc(row){
  this.currentRow = row;
  this.selectedDescriptions = this.currentRow.descriptions;
}

}

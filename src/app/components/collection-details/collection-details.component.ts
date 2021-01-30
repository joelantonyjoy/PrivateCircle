import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {CollectedData} from '../../models/CollectedData';
import {COLLECTED_DATA, DESCRIPTIONS} from '../../mockData/MockData';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements AfterViewInit,OnChanges  {
  @Input() searchWord: string;
  displayedColumns: string[] = ['date', 'listName', 'noOfEntities', 'actions'];
  public dataSource = new MatTableDataSource(COLLECTED_DATA);
  selection = new SelectionModel<CollectedData>(false, []);
  currentRow: CollectedData;
  @ViewChild(MatSort) sort: MatSort;
  selectedDescriptions: String[];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: CollectedData, filter: string) => {
      return data.listName.toLowerCase().indexOf(filter) !== -1;
     };
     this.populateDescriptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchThis();
  }

  searchThis() {
    if(this.searchWord){
      this.searchWord = this.searchWord.trim();
      this.searchWord = this.searchWord.toLowerCase();
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

populateDescriptions(){
  for( var e of COLLECTED_DATA){
  e.descriptions = this.shuffleArray(DESCRIPTIONS).slice(0,e.noOfEntities);
  }
}

shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

}

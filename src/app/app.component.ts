import {AfterViewInit, Component,EventEmitter,Input,Output,ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {CollectedData} from '../app/models/CollectedData';
import {COLLECTED_DATA} from '../app/mockData/MockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public searchWord: string;
  @ViewChild(MatSort) sort: MatSort;
  
  searchThis(searchword: string) {
    this.searchWord = searchword;
}
}
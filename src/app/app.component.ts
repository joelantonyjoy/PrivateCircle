import { SelectionModel } from '@angular/cdk/collections';
import {Component, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {CollectedData} from '../app/models/CollectedData';
import {COLLECTED_DATA} from '../app/mockData/MockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dataSource = new MatTableDataSource(COLLECTED_DATA);
  
  @ViewChild(MatSort) sort: MatSort;
  selectedDescriptions: String[];

  searchThis(searchword) {
    searchword = searchword.trim(); // Remove whitespace
    searchword = searchword.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = searchword;
}
}
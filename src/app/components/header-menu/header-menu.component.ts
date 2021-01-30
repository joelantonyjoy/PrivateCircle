import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})

export class HeaderMenuComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  searchThis(searchword: String) {
    this.searchcriteria.emit(searchword)
}
  
}

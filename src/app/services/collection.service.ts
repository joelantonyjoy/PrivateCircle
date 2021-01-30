import { Injectable } from '@angular/core';
import { COLLECTED_DATA, DESCRIPTIONS } from '../mockData/MockData';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  public getCollections(){
 return this.populateDescriptions();
  }
  populateDescriptions(){
    for( var e of COLLECTED_DATA){
    e.descriptions = this.shuffleArray(DESCRIPTIONS).slice(0,e.noOfEntities);
    }
    return COLLECTED_DATA;
  }
  
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  constructor() { }
}

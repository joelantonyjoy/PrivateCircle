import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { CollectionDetailsComponent } from './components/collection-details/collection-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    CollectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

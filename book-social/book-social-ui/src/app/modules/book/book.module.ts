import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { BookListComponent } from './pages/book-list/book-list.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FaIconComponent
  ]
})
export class BookModule { }

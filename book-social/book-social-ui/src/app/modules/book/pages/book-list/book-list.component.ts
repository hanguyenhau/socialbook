import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../services/services/book.service";
import {Router} from "@angular/router";
import {PageResponseBookResponse} from "../../../../services/models/page-response-book-response";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit{
  bookResponse: PageResponseBookResponse ={};
  page = 0;
  size = 1;
  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.findAllBooks();
  }

  private findAllBooks() {
    this.bookService.findAllBooks({
      page: this.page,
      size: this.size

    }).subscribe({
      next: (books => {
        this.bookResponse = books;
      })
    })
  }

  gotToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }

  gotToPreviusPage() {
    this.page--;
    this.findAllBooks();
  }

  gotToPage(number: number) {
    this.page = number;
    this.findAllBooks();
  }

  gotToNextPage() {
    this.page++;
    this.findAllBooks();
  }

  gotToLastPage() {
    this.page = this.bookResponse.totalPages as number -1;
    this.findAllBooks();
  }

  get isLastPage(): boolean{
    return this.page == this.bookResponse.totalPages as number -1;
  }
}

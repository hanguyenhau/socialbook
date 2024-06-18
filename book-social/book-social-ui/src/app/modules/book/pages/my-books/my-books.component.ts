import {Component, OnInit} from '@angular/core';
import {PageResponseBookResponse} from "../../../../services/models/page-response-book-response";
import {BookService} from "../../../../services/services/book.service";
import {Router} from "@angular/router";
import {BookResponse} from "../../../../services/models/book-response";

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit{
  bookResponse: PageResponseBookResponse ={};
  page = 0;
  size = 5;
  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.findAllBooks();
  }

  private findAllBooks() {
    this.bookService.findAllBooksByOwner({
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

  archiveBook(book: BookResponse) {

  }

  shareBook(book: BookResponse) {

  }

  editBook(book: BookResponse) {
    this.router.navigate(['books', 'manage', book.id]);
  }
}

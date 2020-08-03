import { Component, OnInit } from '@angular/core';
import {IBook} from '../ibook';
import {ICategory} from '../../categories/icategory';
import {BookService} from '../../service/book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[];
  categories: ICategory[];
  page: number =1;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe((resp: IBook[]) =>{
      this.books = resp;
    })
  }

  delete(id) {
    if (confirm('Chac chua !')) {
      this.bookService.delete(id).subscribe((resp: IBook) => {
        this.getAllBook();
      })
    }
  }

}

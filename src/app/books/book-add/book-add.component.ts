import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ICategory} from '../../categories/icategory';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {IBook} from '../ibook';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  categories: ICategory[] =[];

  bookForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl('')
  })



  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
   this.categoryService.getAll().subscribe((resp: ICategory[]) =>{
      this.categories = resp;
    });

  }

  submit() {
    if (this.bookForm.valid){
      const book: IBook = {
        name: this.bookForm.value.name,
        author: this.bookForm.value.author,
        category: {
          id: this.bookForm.value.category
        }
      }
      this.bookService.add(book).subscribe(data =>{
        this.router.navigate(['/books'])
      });
      }
    }


}

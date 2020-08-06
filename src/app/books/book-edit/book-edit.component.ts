import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router,ActivatedRoute} from '@angular/router';
import {IBook} from '../ibook';
import {ICategory} from '../../categories/icategory';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  categories: ICategory[] =[];


  editBookForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl('')
  })

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private categoryService: CategoryService) {

  }
  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((resp: ICategory[]) =>{
      this.categories =resp
    })
    this.findById();
  }

  findById(){
    this.bookService.findBookById(this.id).subscribe((resp: IBook) =>{
      this.editBookForm.patchValue(resp);
    })
  }

  update() {
    if (this.editBookForm.valid){
      const book: IBook = {
        id: this.editBookForm.value.id,
        name: this.editBookForm.value.name,
        author: this.editBookForm.value.author,
        category: {
          id: this.editBookForm.value.category
        }
      }
      this.bookService.update(this.id,book).subscribe(data =>{
        this.router.navigate(['/books'])
      });
    }
  }

}

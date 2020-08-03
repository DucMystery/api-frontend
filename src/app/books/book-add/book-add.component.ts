import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  addBookForm:FormGroup;
  categories: ICategory[] =[];



  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      id: ['',[Validators.required]],
      name: ['',[Validators.required]],
      author: ['',[Validators.required]],
      category: ['']
    });
   this.categoryService.getAll().subscribe((resp: ICategory[]) =>{
      this.categories = resp;
    });

  }

  submit() {
    // let data = this.addBookForm.value;
    // data.category =<ICategory> data.category;
    // this.bookService.add(data).subscribe((resp: IBook) => {
    //   this.bookService.add(resp);
    // });
    // this.router.navigate(['']);
    if (this.addBookForm.valid){
      let data = this.addBookForm.value;
      data.category.id = <ICategory> data.category.id;
      data.id = Number(data.id);
      this.bookService.add(data).subscribe((resp:IBook) => {
        this.addBookForm.reset;
        this.router.navigate(['']);
      },
        error => {
        alert(error);
        })
    }
  }


}

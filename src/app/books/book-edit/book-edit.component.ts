import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  editBookForm: FormGroup;
  categories: ICategory[] =[];

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private categoryService: CategoryService) {

  }
  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.editBookForm = this.fb.group({
      name: ['',[Validators.required]],
      author: ['',[Validators.required]],
      category: ['']
    })
    this.categoryService.getAll().subscribe((resp: ICategory[]) =>{
      this.categories =resp
    })
    this.findById();
  }

  findById(){
    this.bookService.findById(this.id).subscribe((resp: IBook) =>{
      this.editBookForm.patchValue(resp);
    })
  }

  update(){
    let data = this.editBookForm.value;
    this.bookService.update(data,this.id).subscribe((resp: IBook) =>{
      this.router.navigate(['']);
    })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookAddComponent } from './book-add/book-add.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { BookDeleteComponent } from './book-delete/book-delete.component';

const route: Routes = [
  {path: '',component:BookComponent},
  {path: 'add',component: BookAddComponent},
  {path: ':id/edit',component: BookEditComponent},
  {path: ':id/delete',component: BookDeleteComponent},
]

@NgModule({
  declarations: [BookComponent, BookAddComponent, BookListComponent, BookEditComponent, BookDeleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    NgxPaginationModule
  ]
})
export class BookModule { }

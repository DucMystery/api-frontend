import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './users/_supports/auth.guard';
import {LoginComponent} from './users/login/login.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: 'books',loadChildren: () => import('./books/book.module').then(m => m.BookModule)},
  { path: '', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

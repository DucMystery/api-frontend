import { Injectable } from '@angular/core';
import {IBook} from '../books/ibook';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = environment.url_api+'/books';
  constructor(private http: HttpClient) { }
  getAll() : Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  delete(id: number): Observable<IBook> {
    return this.http.delete<IBook>(this.url+'/'+id+'/delete');
  }

  add(data: any): Observable<IBook> {
    return this.http.post<IBook>(this.url+'/create',data);
  }

  findById(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.url+'/'+id+'/search');
  }

  update(data: any,id: number) : Observable<IBook> {
    return this.http.put<IBook>(this.url+'/'+id+'edit',data);
  }
}

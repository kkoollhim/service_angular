import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  user: user = {
    id :0,
    name: '',
    username: '',
    email: '',
    address: null,
    phone: 0,
    website: '',
    company: null
  }
  subject = new BehaviorSubject<user>(this.user);
  // subject = new Subject<user>();

  getUsers():Observable<user>{
    return this.http.get<user>("https://jsonplaceholder.typicode.com/users");
  }

}

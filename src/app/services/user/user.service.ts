import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import User from '../../models/user';
import { Observable } from 'rxjs';
import CreateUserResponse from 'src/app/models/createUserResponse';
import CreateUserRequest from 'src/app/models/createUserRequest';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  path: string = "https://reqres.in/"
  users: User[]

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + "api/users")
  }

  createUser(user: CreateUserRequest): Observable<CreateUserResponse> {
    return this.http.post<CreateUserResponse>(this.path + "api/users", user)
  }
}


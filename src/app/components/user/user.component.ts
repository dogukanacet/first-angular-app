import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserService } from 'src/app/services/user/user.service';
import User from '../../models/user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: Array<User>;
  // path: string = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient,
    private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data
    })
  }
}


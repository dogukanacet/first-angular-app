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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
    this.createUser()
  }
  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res['data']
    })
  }
  createUser() {
    this.userService.createUser().subscribe(res => {
      alert(JSON.stringify(res))
    })
  }
}


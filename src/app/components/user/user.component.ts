import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import User from '../../models/user';
import CreateUserRequest from 'src/app/models/createUserRequest';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: Array<User>
  newUser: CreateUserRequest = <CreateUserRequest>{}

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res['data']
    })
  }
  createUser() {
    this.userService.createUser(this.newUser).subscribe(res => {
      this.users.push({ first_name: res.name, last_name: res.job }), err => {
        alert("hata")
      }
    })
  }
}
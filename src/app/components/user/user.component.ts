import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import User from '../../models/user';
import CreateUserResponse from 'src/app/models/createUserResponse';
import CreateUserRequest from 'src/app/models/createUserRequest';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: Array<User>
  newUser: CreateUserRequest = <CreateUserRequest>{}
  newUser2: CreateUserResponse = <CreateUserResponse>{}

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
    // this.createUser()
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
  onClick() {
    if(this.newUser){
      this.users.push(this.newUser)
      this.newUser
    }
  }
}
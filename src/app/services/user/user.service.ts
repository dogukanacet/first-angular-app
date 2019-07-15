import {Injectable} from '@angular/core';
import User from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  getUsers(): User[] {
    let users: Array<User>;

    users=[
      {
        id: 4,
        email: "eve.holt@reqres.in",
        firstName: "Eve",
        lastName: "Holt",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 4,
        email: "charles.morris@reqres.in",
        firstName: "Charles",
        lastName: "Morris",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        firstName: "Tracey",
        lastName: "Ramos",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ];

    return users;
  }
}

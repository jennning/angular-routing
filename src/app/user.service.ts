import { Injectable } from '@angular/core';
import { User } from './user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Sam',
        gender: 'male',
        birthday: '6/3/1974',
        age: 46
      },
      {
        id: 2,
        name: 'Robert',
        gender: 'male',
        birthday: '2/4/1962',
        age: 58
      },
      {
        id: 3,
        name: 'Mary',
        gender: 'female',
        birthday: '10/26/1991',
        age: 26
      },
      {
        id: 4,
        name: 'Margaret',
        gender: 'female',
        birthday: '12/24/1984',
        age: 35
      }
    ];
  }
}

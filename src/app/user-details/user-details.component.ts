import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user.type';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  get user$(): Observable<User> {
    return this.route.paramMap.pipe(
      map((params) =>
        this.userSvc.getUsers().find((x) => x.id === +params.get('id'))
      ),
      tap((user) => !user && this.router.navigate(['user']))
    );
  }

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}

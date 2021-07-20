import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();

  constructor(
    private usersvc: UserService,
    private router: Router,
  ) { }

  saveCreate(): void {
    this.usersvc.create(this.user).subscribe(
    res => {console.debug("create success");
            this.router.navigateByUrl("/user/list");},
    err => {console.error(err);}
  );}

  ngOnInit(): void {
  }


}

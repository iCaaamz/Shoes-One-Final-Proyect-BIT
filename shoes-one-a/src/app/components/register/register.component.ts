import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {}

  register(form:NgForm){
    const{username, email, password, confirmPassword, permissions, islogged} = form.value
    console.log(form.value)

    this.userService.register({username, email, password, confirmPassword, permissions, islogged}).subscribe(
      (data) => {
        console.log("usuario creado")
      },
      (err) => console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/usermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userservice: UserService, public router: Router) { }

  ngOnInit(): void {}

  login(form: NgForm) {
    try {
      if (!form.value.email || !form.value.password)
        throw 'Uno o mas campos estan vacios';

      this.userservice.login(form.value).subscribe((res: any) => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
        console.log(res)
      },
      (err) => console.log(err));
    } catch (error) {
      alert(error);
      return;
    }
  }
  

}

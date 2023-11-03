import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { IUserInfo } from '../user-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router) {}

  formGroup: FormGroup;
  hide = true;

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: '',
      password:''
    });
  }

  loguearse() {
    
    let userInfo: IUserInfo = Object.assign({}, this.formGroup.value);
    
    this.accountService.login(userInfo).subscribe(token => this.recibirToken(token),
      error => this.manejarError(error));
  }

  registrarse() {
    this.router.navigate(["/register"]);
  }

  recibirToken(token) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('tokenExpiration', token.expiration);
    this.router.navigate(["/principal"]);
  }

  manejarError(error) {
    if (error && error.error) {
      alert(error.error[""]);
    }
  }

}


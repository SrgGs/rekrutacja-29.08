import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormService } from './services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginFormService: LoginFormService
  ) { }

  ngOnInit(): void {
    this.form = this.loginFormService.form();
  }

  submit(): void {
    console.log(this.form)
  }

}

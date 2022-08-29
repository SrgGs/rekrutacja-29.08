import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { validateAllGroupFields } from '@shared/utils/validate-all-group-fields';
import { LoginRequest } from './interfaces/login-request.interface';
import { LoginApiService } from './services/login-api.service';
import { LoginFormService } from './services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginFormService: LoginFormService,
    private loginApi: LoginApiService
  ) { }

  ngOnInit(): void {
    this.form = this.loginFormService.form();
  }

  submit(): void {
    if(!this.form.valid) {
      validateAllGroupFields(this.form);
      return;
    }

    this.loginApi.getLogin(this.form.value as LoginRequest).subscribe((e) => console.log(e))
  }

}

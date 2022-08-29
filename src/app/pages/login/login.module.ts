import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormService } from './services/login-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '@shared/ui/input/input.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    InputModule,
    MatButtonModule
  ],
  providers: [
    LoginFormService
  ]
})
export class LoginModule { }

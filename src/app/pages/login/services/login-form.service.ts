import { Injectable, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern } from '@shared/constans/validator-pattern.const';

@Injectable()
export class LoginFormService {

  constructor(
    @Optional() private formBuilder: FormBuilder,
  ) { }

  form(): FormGroup {
    return this.formBuilder.group(
			{
				email: [null, Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
				password: [null, Validators.required],
			},
			{
				updateOn: 'blur',
			},
		);
  }
}

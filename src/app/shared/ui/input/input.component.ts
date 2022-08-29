import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Nullable } from '@shared/types/nullable';
import { ErrorMessage } from './interfaces/error-message.interface';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
})
export class InputComponent {

  @Input() controlName: string;
  @Input() label: string;
  @Input() placeholder: string;
	@Input() type = 'text';
  @Input() lzErrorMessage: Partial<ErrorMessage>;

  matcher = new MyErrorStateMatcher();

  constructor(
    private formGroupDirective: FormGroupDirective
  ) { }

	get errorMessage(): Nullable<string> {
		const controlName = this.formGroupDirective.form.controls[this.controlName];

		if (!this.lzErrorMessage) {
			return null;
		}

		if (!controlName.errors) {
			return null;
		}

		for (const [key] of Object.entries(controlName.errors)) {
			if (Object.prototype.hasOwnProperty.call(controlName.errors, key)) {
				return this.lzErrorMessage[key as keyof ErrorMessage] ?? null;
			}
		}

    return null
	}

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {

    const isSubmitted = form && form.submitted;

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
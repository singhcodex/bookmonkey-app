import { Component, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'bm-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css'],
})
export class FormErrorComponent {
  @Input() controlName?: string;
  @Input() message: { [errorCode: string]: string } = {};

  constructor(private form: FormGroupDirective) {}

  get errors(): string[] {
    if (!this.controlName) {
      return [];
    }

    const control = this.form.control.get(this.controlName);

    if (!control || !control.errors || !control.touched) {
      return [];
    }

    return Object.keys(control.errors).map((errorCode) => {
      return this.message[errorCode];
    });
  }
}

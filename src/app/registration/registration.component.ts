import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formgroup!: FormGroup;
  constructor(private fb: FormBuilder) {
      this.formgroup = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      phonenumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    });
  }

  onsubmit() {
    if (this.formgroup.valid) {
      alert('successfully inserted')
    }
    else {
      alert('error')
    }

  }
}

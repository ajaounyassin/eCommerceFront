import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('');
  surname = new FormControl('');
  date = new FormControl('');
  address = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  postCode = new FormControl('');
  profile = new FormControl('');

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit(form: NgForm) {
    console.log(this.email.value);
    console.log(this.password.value);
    console.log(this.name.value);
    console.log(this.surname.value);
    console.log(this.date.value);
    console.log(this.address.value);
    console.log(this.city.value);
    console.log(this.state.value);
    console.log(this.postCode.value);
    console.log(this.profile.value);
}
}


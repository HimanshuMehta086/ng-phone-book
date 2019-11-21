import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneService } from '../_services/phone.service';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {
  form: FormGroup;

  constructor(private phoneService: PhoneService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      telephone: new FormControl('', Validators.maxLength(11)),
      mobilephone: new FormControl('', Validators.maxLength(11)),
      email: new FormControl('', Validators.email),
      category: new FormControl('', Validators.required)
    });
  }

  get name() {
    return this.form.controls['name'];
  }

  get telephone() {
    return this.form.controls['telephone'];
  }

  get mobilephone() {
    return this.form.controls['mobilephone'];
  }

  get email() {
    return this.form.controls['email'];
  }

  get category() {
    return this.form.controls['category'];
  }

  onSubmit() {
    this.phoneService
      .createContact(this.form)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}

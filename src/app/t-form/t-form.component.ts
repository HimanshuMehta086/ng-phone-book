import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../_services/phone.service';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.css']
})
export class TFormComponent implements OnInit {
  constructor(private phoneService: PhoneService) {}

  ngOnInit() {}

  onSubmit(form) {
    this.phoneService
      .createContact(form)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}

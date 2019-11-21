import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../_services/phone.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  phonebook$: Observable<any>;
  constructor(private phoneService: PhoneService) {}

  ngOnInit() {
    this.phonebook$ = this.phoneService.get();
  }
}

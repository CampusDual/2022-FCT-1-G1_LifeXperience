import { Component, OnInit } from '@angular/core';
import { ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.css']
})
export class ClientsNewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }



   ageValidator(control: FormControl): ValidationErrors {
      let result = {};
      let currentdateYear = new Date().getFullYear();
      let selectedDateYear = new Date(control.value).getFullYear();
      if (control.value && (currentdateYear - selectedDateYear < 18)) {
        result['adult'] = true;
      }
      return result;
    }

}

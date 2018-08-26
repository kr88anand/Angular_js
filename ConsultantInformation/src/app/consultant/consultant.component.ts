import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultantService } from '../consultant.service';
import { Consultant } from '../consultant';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

  public globalResponse: any;
  isFailedMessage: Boolean = false;
  isSuccessMessage: Boolean = false;
  message = '';
  public consultant = [];
  consultants: Consultant[] = [];

  constructor(private router: Router, private consultantService: ConsultantService) { }

  ngOnInit() {

  this.consultantService.getConsultants()
  .subscribe((result) => {
    console.log('Get the list of consultant');
    this.consultants = result;
    console.log(this.consultants);
  },
  error => {
    // This is error part
    console.log(error);
    this.isFailedMessage = true;
    this.message = 'Get customer is failed due to some reason.';
  },
  () => {
    // 'onCompleted' callback. This is Success part
    this.isSuccessMessage = true;
    this.message = 'Get customer is successfully.';
    });
}

// getAllConsultants(): void {
//   this.consultantService.getConsultants()
//   .subscribe((result) => {
//     console.log('Get the list of consultant');
//     this.consultant = result;
//     console.log(this.consultant);
//   },
//   error => {
//     // This is error part
//     console.log(error);
//     this.isFailedMessage = true;
//     this.message = 'Get customer is failed due to some reason.';
//   },
//   () => {
//     // 'onCompleted' callback. This is Success part
//     this.isSuccessMessage = true;
//     this.message = 'Get customer is successfully.';
//     });
//   }
}


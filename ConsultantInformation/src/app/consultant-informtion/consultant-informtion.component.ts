import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consultant } from '../consultant';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-consultant-informtion',
  templateUrl: './consultant-informtion.component.html',
  styleUrls: ['./consultant-informtion.component.css'],
  providers: [ConsultantService]
})
export class ConsultantInformtionComponent implements OnInit {
  consultantForm:  FormGroup;
  consultantInfo: Consultant;
  submitted: Boolean = false;
  invalidLogin: Boolean = false;
  selectedFile: File;
  isFailedMessage: Boolean = false;
  isSuccessMessage: Boolean = false;
  public globalResponse: any;
  message = '';
  public consultant = [];

  constructor(private fb: FormBuilder, private consultantService: ConsultantService) { }

  ngOnInit() {
    this.consultantForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      job: ['', Validators.required],
      dob: ['', Validators.required],
      position: ['', Validators.required],
      rate: ['', Validators.required],
      education: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      skype: ['', Validators.required],
      phone: ['', Validators.required],
      expiryDate: ['', Validators.required],
      certificate: ['', Validators.required]

    });
  }

  onfileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  SubmitForm() {
    console.log(this.consultantForm.value);
    this.consultantInfo = this.consultantForm.value;
    this.consultantInfo.id = 0;
    this.consultantInfo.fname = this.consultantForm.controls['fname'].value;
    this.consultantInfo.lname = this.consultantForm.controls['lname'].value;
    this.consultantInfo.job = this.consultantForm.controls['job'].value;
    this.consultantInfo.dob = this.consultantForm.controls['dob'].value.toLocaleDateString('en-US');
    this.consultantInfo.position = this.consultantForm.controls['position'].value;
    this.consultantInfo.rate = this.consultantForm.controls['rate'].value;
    this.consultantInfo.education = this.consultantForm.controls['education'].value;
    this.consultantInfo.address = this.consultantForm.controls['address'].value;
    this.consultantInfo.email = this.consultantForm.controls['email'].value;
    this.consultantInfo.skype = this.consultantForm.controls['skype'].value;
    this.consultantInfo.phone = this.consultantForm.controls['phone'].value;
    this.consultantInfo.expiryDate = this.consultantForm.controls['expiryDate'].value;
    this.consultantInfo.certificate = this.consultantForm.controls['certificate'].value;
    this.consultantService.insertConsultant(this.consultantInfo)
    .subscribe((result) => {
      this.globalResponse = result;
  },
      error => {
          console.log(error);
          this.isFailedMessage = true;
          this.message = 'Customer Insertion Failed.';
      },
      () => {
          // 'onCompleted' callback. This is Success part
        this.isSuccessMessage = true;
        this.message = 'Customer Inserted successfully.';
         // this.customerForm.reset();
      }
  );
  }
}

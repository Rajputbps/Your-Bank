import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { optVarify, Users } from '../model/user';


@Component({
  selector: 'app-lone-form',
  templateUrl: './lone-form.component.html',
  styleUrls: ['./lone-form.component.css']
})
export class LoneFormComponent implements OnInit {
  @Input() fieldValue = '';
  isShow = false;
  form: any = {};
  applyfaild = false;
  applysuccess = false;
  userDetails: Users;
  otpverify: optVarify;
  errorMessage: string = null;
  messagediv = true;
  message: string = null;


  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  Onapply() {
    this.userDetails = new Users(this.form.panNumber, this.form.city, this.form.fname + this.form.lname, this.form.email, this.form.phone,);
    this.service.applyforlone(this.userDetails).subscribe(data => {
      if (data.status != 200) {
        this.applyfaild = true;
        console.log(data);
      } else {
        console.log(data);
        this.applysuccess = true;
        this.errorMessage = "Applied successfully";
        this.isShow = true;
      }
    },
      (error) => {
        this.errorMessage = error.error.message;
        this.applyfaild = true;
      })
  }


  verifyOPT() {
    this.otpverify = new optVarify(this.form.phone, this.form.otp);
    this.service.verifyOtp(this.otpverify).subscribe((data) => {
      if (data.status != 200) {
        this.message = "Some problem sorry";
      } else {
        this.messagediv = false;
        this.message = "Thanks to apply for lone :)";
      }
    })
  }

}

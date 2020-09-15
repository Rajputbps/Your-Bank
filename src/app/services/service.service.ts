import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { optVarify, Users } from '../component/model/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  applyforlone(details: Users): Observable<HttpResponse<Config>> {
    console.log(details);
    return this.http.post<HttpResponse<Config>>("http://lab.thinkoverit.com/api/getOTP.php", details, httpOptions);
  }

  verifyOtp(otpv: optVarify): Observable<HttpResponse<Config>> {
    console.log(otpv);
    return this.http.post<HttpResponse<Config>>("http://lab.thinkoverit.com/api/verifyOTP.php", otpv, httpOptions);
  }
}

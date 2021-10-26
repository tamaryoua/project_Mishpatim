import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  readonly APIUrl="https://localhost:44359/"
  constructor(private http:HttpClient) { }

  sendMail():Observable<any>{
    debugger;
    return this.http.get<any>(this.APIUrl+'/weatherforecast')
  }
}

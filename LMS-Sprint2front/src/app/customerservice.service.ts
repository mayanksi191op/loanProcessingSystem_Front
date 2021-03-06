import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http: HttpClient) { }

  myURL = 'http://localhost:8080/api';

  postApplication(email, applyloan){
    return this.http.post<any>(`${this.myURL}/makeloan/${email}`, applyloan);
  }

  postCustomer(customer) {
    return this.http.post<any>(`${this.myURL}/customers`, customer)
  }

  viewDetails(email){
    return this.http.get<any>(`${this.myURL}/user/${email}`)
  }

  changepassword(user){
    return this.http.put<any>(`${this.myURL}/customers/password/put`, user);
  }

  updateuser(user){
    return this.http.put<any>(`${this.myURL}/customers/put`, user);
  }
}

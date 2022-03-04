import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http : HttpClient) { }

  getDoctors(){
    return this.http.get('https://sani-saiti.developerakademie.net/doktorDatabase/get_doctors.php');
    
  }
}

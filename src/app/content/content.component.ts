import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {



  doctors = [];
  filterdDoctors = this.doctors;
  resultError = false;
  errorMessage: string;
  filterdDoctors2 = [];
  doctorDetailed : any;

  constructor(public data: DataService, public router: Router) { }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors() {
    this.data.getDoctors().subscribe((result: any) => {
      if (result.status == 500) {
        this.resultError = true;
        this.errorMessage = result.error;
        console.log(result.error);
      } else {
        this.resultError = false;
        this.doctors = result;
        this.filterdDoctors = this.doctors;
        console.log('result', this.doctors);
      }
    });

  }
  refreshdoctor() {
    this.filterdDoctors = this.doctors;
    this.filterdDoctors2 = [];
  }
  search(speciality: any, city: any) {

    this.refreshdoctor();

    this.filterdDoctors = this.filterdDoctors.filter(element => element.city == city);
    for (let j = 0; j < this.filterdDoctors.length; j++) {
      for (let i = 0; i < this.filterdDoctors[j].specialities.length; i++) {
        if (this.filterdDoctors[j].specialities[i] == speciality)
          this.filterdDoctors2.push(this.filterdDoctors[j]);
      }

    };
    this.filterdDoctors = this.filterdDoctors2;
    console.log('Searched doctors', this.filterdDoctors2)
  }


  showDoctor(doctor: any) {
    this.doctorDetailed = doctor;
    console.log('doctor', doctor);
  }


}


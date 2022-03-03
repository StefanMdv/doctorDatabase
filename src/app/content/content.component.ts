import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  doctors = [];
  filterdDoctors=this.doctors;
  constructor(public data: DataService) { }

  ngOnInit(): void {
   this.loadDoctors();
  }

  loadDoctors () {
    this.data.getDoctors().subscribe((result: any) => {
      this.doctors = result;
      console.log('result', this.doctors);
    });
  }
}

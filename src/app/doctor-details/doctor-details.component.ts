import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  @ViewChild('image') img: any;

  currentDoctor: any;

  constructor(public content: ContentComponent) { }

  ngOnInit(): void {
    this.getDoctorDetail();
  }

  getDoctorDetail() {
    this.currentDoctor = this.content.doctorDetailed;
    console.log('doctors details compionent', this.currentDoctor);
    this.changePosition();
  }


  async changePosition() {
    await setInterval(() => {
      this.img.nativeElement.style = 'object-position: right';
      // this.img.nativeElement.style = 'transform: rotate: 180deg;';
    }, 400);
   await setInterval(() => {
      this.img.nativeElement.style = 'object-position: revert';
      // this.img.nativeElement.style = 'transform: rotate: 360deg;';
    }, 800);
    
  }

}

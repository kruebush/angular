import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { DoctorService } from '../_services/doctor.service';



@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  doctors: Doctor[] = [];
  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((data: any) => {
      this.doctors= data;
    })
  }
  }



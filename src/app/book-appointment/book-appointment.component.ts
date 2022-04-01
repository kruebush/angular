import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AppointmentService } from '../_services/appointment.service';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})

export class BookAppointmentComponent implements OnInit {

  book: FormGroup;
  successMessage !: string;
 

  constructor(public formBuilder:FormBuilder, public appointmentService: AppointmentService, public router:Router) {     
    this.book = new FormGroup({
      doctorName: new FormControl('',Validators.required),
      pateintName: new FormControl('',Validators.required),
      Insurance: new FormControl('',Validators.required),
      Time: new FormControl('',Validators.required),
});
    
    }
  
    ngOnInit(): void {

    }
  
    bookAppointment(){
      console.log(this.book.value)
      this.appointmentService.saveAppointment(this.book.value).subscribe((data: any) =>{
      this.successMessage = 'Appointment saved';
      this.router.navigate(['doctorInfo']);
     })
    }
  }
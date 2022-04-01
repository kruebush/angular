import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError,Observable, retry,throwError  } from 'rxjs';
import { Doctor } from '../model/doctor';

const doctorURL = "http://localhost:5050/doctors"

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(public httpClient: HttpClient) { }

  //Getting all the Doctors
  
getDoctors(): Observable<Doctor[]> {
  return this.httpClient.get<Doctor[]>(doctorURL)
  .pipe(
    retry(0),
    catchError(this.errorHandler)
  );
}

  //Getting a single Doctor
  //"http://localhost:3000/Doctor/99
  getDoctor(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${doctorURL}/${doctorId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }
 
  //
  searchDoctor(specialty: string, location_city: string, location_state: string, insurance_Excepted: string ): Observable<Doctor> {
   // return this.httpClient.get<Doctor>(`${doctorURL}/${specialty}/$}/${location_city}/${doctorURL}/${location_state}${doctorURL}/${insurance_Excepted}`)
   return this.httpClient.get<Doctor>(`${doctorURL}/searchDoctorBySLI/${specialty}/${location_city}/${location_state}/${insurance_Excepted}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //Deleting a single Doctor
  //"http://localhost:3000/Doctor/99 - DELETE
  deleteDoctor(doctorId: number): Observable<Doctor> {
    return this.httpClient.delete<Doctor>(`${doctorURL}/${doctorId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //saving a single Doctor
  //"http://localhost:3000/Doctor
  saveDoctor(doctor:Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>(doctorURL,doctor,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

    //edit/update a single Doctor
    //Please complete this 
  //localhost:3000/Doctor/71 - PUT and in body we have to pass Doctor object
  updateDoctor(doctorId:number,doctor:Doctor): Observable<Doctor> {
    return this.httpClient.put<Doctor>(`${doctorURL}/${doctorId}`,doctor,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `REVError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
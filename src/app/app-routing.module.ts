import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { KamisComponentComponent } from './finddoctor-component/kamis-component.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'doctorInfo', component : DoctorInfoComponent},
  { path: 'bookAppointment', component : BookAppointmentComponent},
  { path: 'findDoctor', component : KamisComponentComponent },
   {path : '', redirectTo : 'doctorInfo', pathMatch : 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

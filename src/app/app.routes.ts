import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { PetsComponent } from './dashboard/pets/pets.component';
import { AppointmentsComponent } from './dashboard/appointments/appointments.component';
import { TreatmentsComponent } from './dashboard/treatments/treatments.component';
import { MedicationsComponent } from './dashboard/medications/medications.component';
import { InvoicesComponent } from './dashboard/invoices/invoices.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'clients', pathMatch: 'full' }, // Default to clients page
      { path: 'clients', component: ClientsComponent },
      { path: 'pets', component: PetsComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'treatments', component: TreatmentsComponent },
      { path: 'medications', component: MedicationsComponent },
      { path: 'invoices', component: InvoicesComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }  // Catch-all route for undefined routes
];

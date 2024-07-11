import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import { TableComponent } from './table/table.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
    
    {path: 'submit', component: LoginComponent },
    {path: 'success', component: TableComponent },
    {path: 'calendar', component: CalendarComponent},
    {path: 'login', component: LoginComponent},
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    
        
      
    
];


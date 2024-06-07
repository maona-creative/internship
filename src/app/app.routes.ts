import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import { TableComponent } from './table/table.component';

export const routes: Routes = [
    
    {path: 'submit', component: LoginComponent },
    {path: 'success', component: TableComponent },
    
        
      
    
];


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from './table/table.component';
import { JsonComponent } from './json/json.component';
import { WelderComponent } from './welder/welder.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LoginComponent, ButtonModule, TableComponent, JsonComponent, WelderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-login';
 
}

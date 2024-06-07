import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { AutoFocusModule } from 'primeng/autofocus';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, 
    ButtonModule,
     PasswordModule, 
     InputTextModule,
    AutoFocusModule
  ],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
})

constructor(private router: Router) { }

onSubmit() {
  this.router.navigate(['/success']);
  console.log(this.loginForm.value);
}
}

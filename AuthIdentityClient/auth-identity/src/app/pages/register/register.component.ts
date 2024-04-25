import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  hide = true;
  formLogin!: FormGroup;
  formRegister!: FormGroup;
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  decodedToken: any | null;
  tokenKey = 'token' 
  roles: string[] = [];


  register() {
    const rolesString: string = this.formRegister.value.roles;
    this.roles = rolesString.split(' ').map((role: string) => role.trim());
    this.formRegister.value.roles = this.roles;
    // Assuming you have a method in your AuthService for registering users
    this.authService.register(this.formRegister.value).subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
          this.matSnackBar.open(err.error.message, 'Close', {
            duration: 5000,
            horizontalPosition: 'center'
          });
        }
      }
    );
  }
  
    ngOnInit(): void {


      this.formRegister = this.fb.group({
        username: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        age: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        roles: ['', Validators.required],
      })
    }
}

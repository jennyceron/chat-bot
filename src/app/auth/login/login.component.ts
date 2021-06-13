import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {


  inicioForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  });
  constructor(private authSvc: AuthService, private ruta: Router) { }

  ngOnInit(): void {
  }


  async onInicio() {
    // console.log(this.inicioForm.value);
    const { email, password } = this.inicioForm.value;

    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        // redireccionar 
        this.ruta.navigate(['/home'])
      }
    
    } catch (error) {console.log(error)
      
    }
    this.authSvc.login(email, password);
  }
}

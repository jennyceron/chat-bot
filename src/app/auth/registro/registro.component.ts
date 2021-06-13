import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [AuthService],
})
export class RegistroComponent implements OnInit {

  registroForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  });


  constructor(private authSvc: AuthService, private ruta: Router) { }

  ngOnInit(): void {
  }

  async onRegistro() {
    const { email, password } = this.registroForm.value;
    try {
      const user = await this.authSvc.Registro(email, password);
      if (user) {
        this.ruta.navigate(['/home']);
      }

    } catch (error) {console.log(error)
      
    }
  }

}

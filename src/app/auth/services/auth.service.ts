import { Injectable } from '@angular/core';
import { first } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';





@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public afAuth: AngularFireAuth) { }


  async login(email: string, password: string) {

    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      Swal.fire('Oops...', 'Datos incorrectos!', 'error')


    }

  };

  async Registro(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      Swal.fire('Oops...', 'Usuario ya existe!', 'error')

    }
  }

  async logout() {
    try {
      await this.afAuth.signOut()
    } catch (error) {
      console.log(error)

    }

  }
  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise()
    } catch (error) {
      console.log(error)

    }
  }

}
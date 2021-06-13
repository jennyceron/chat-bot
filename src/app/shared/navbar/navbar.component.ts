import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private ruta: Router) { }



  async onlogout() {
    try {
      await this.authSvc.logout();
      this.ruta.navigate(['/login']),
        window.location.reload();

        
    } catch (error) {
      console.log(error)

    }


  }

}

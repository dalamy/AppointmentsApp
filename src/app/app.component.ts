import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointments-app';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,

  ){

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

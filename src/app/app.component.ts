import { Component } from '@angular/core';

// Importamos el AuthService
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Injectamos la autenticación 
  constructor(public auth: AuthService) {}
}

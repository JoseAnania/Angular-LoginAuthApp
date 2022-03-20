import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// Importamos el modulo Auth 
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importamos el módulo Auth dentro de la aplicación
    AuthModule.forRoot({
      domain: 'dev-s0fataw4.us.auth0.com',
      clientId: 'p6ZFEzh1LYgrcoKpHlIn3WXTVt8TSQSw'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

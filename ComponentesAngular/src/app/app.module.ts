import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarEnfermeraComponent } from './nav-bar-enfermera/nav-bar-enfermera.component';
import { NavBarDoctorComponent } from './nav-bar-doctor/nav-bar-doctor.component';
import { FooterComponent } from './footer/footer.component';
import { BuscarComponent } from './buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarEnfermeraComponent,
    NavBarDoctorComponent,
    FooterComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

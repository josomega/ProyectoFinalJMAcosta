import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './Components/menu-principal/menu-principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './Components/inicio/inicio.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { CRUDComponent } from './components/crud/crud.component';
import { ServicioModalComponent } from './components/servicio-modal/servicio-modal.component';
import { DataTablesModule } from 'angular-datatables';
import { ServicioFormularioComponent } from './components/servicio-formulario/servicio-formulario.component';
import { ServicioFormularioTablaComponent } from './components/servicio-formulario-tabla/servicio-formulario-tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreditosComponent } from './Components/creditos/creditos.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    InicioComponent,
    CarruselComponent,
    CRUDComponent,
    ServicioModalComponent,
    ServicioFormularioComponent,
    ServicioFormularioTablaComponent,
    RegistroComponent,
    LoginComponent,
    CreditosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataTablesModule, 
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

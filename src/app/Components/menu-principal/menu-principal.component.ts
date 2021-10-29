import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/Models/persona';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  private usuario: Array<Persona> = [];

  constructor(
    private modalservice: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public abrirlogin(){
   const modalRef = this.modalservice.open(LoginComponent);
   
   // modalRef.componentInstance.guardarserv.subscribe(this.guardarServiciopersona)
  }
  public abrirregistro(){
    const modalRef = this.modalservice.open(RegistroComponent);
  //   modalRef.componentInstance.usuario= 'Persona';
  //   modalRef.componentInstance.guardarServiciopersona
  //  .subscribe(()) 
  }

 

}

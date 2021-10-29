import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { acciones } from 'src/app/enums/acciones';
import { Accion } from 'src/app/Models/accion';
import { Persona } from 'src/app/Models/persona';
import { ServicioFormularioComponent } from '../servicio-formulario/servicio-formulario.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent implements OnInit {

  public serviciopersonas: Array<Persona>= [];

  constructor(
    private modalservice: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public abrirmodalcrud(){
    const modalRef = this.modalservice.open(ServicioFormularioComponent);
    modalRef.componentInstance.guardarServicio.subscribe(this.guardarServiciopersona)
  }

  public guardarServiciopersona = (_guardarServicioPers: Accion) => {
    if(_guardarServicioPers.accion === acciones.CREATE) {
      this.serviciopersonas = [
        ...this.serviciopersonas,
        _guardarServicioPers.serviciopersonas
      ];
    } else {
        this.serviciopersonas = this.serviciopersonas
          .filter((serviciopersona: Persona) => serviciopersona._id !== _guardarServicioPers.serviciopersonas._id);
      this.serviciopersonas = [
        ...this.serviciopersonas,
        _guardarServicioPers.serviciopersonas
      ];
    }
    console.log(this.serviciopersonas.length);
  }
}
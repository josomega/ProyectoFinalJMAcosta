import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { DtservicioService } from 'src/app/dtservicio.service';
import { Accion } from 'src/app/Models/accion';
import { Persona } from 'src/app/Models/persona';
import { ServicioFormularioComponent } from '../servicio-formulario/servicio-formulario.component';

@Component({
  selector: 'app-servicio-formulario-tabla',
  templateUrl: './servicio-formulario-tabla.component.html',
  styleUrls: ['./servicio-formulario-tabla.component.scss']
})
export class ServicioFormularioTablaComponent implements OnInit , OnChanges{
  @Input() serviciopersonas: Array<Persona> = [];
  @Output() guardarServicio = new EventEmitter<Accion>();


  // public dtOptions: any = this.dataTableService.getDtOptiones();
  public dtOptions: any = this.dataTableService.getDtOptions();
  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private dataTableService: DtservicioService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.renderizartabla();
  }

  ngOnChanges(changes: SimpleChanges){
    this.renderizartabla();
  }

  private renderizartabla(){
    this.dtTrigger.next();
  }

  public abrireditar(serviciopersonas: Persona) {
    const modalRef = this.modalService.open(ServicioFormularioComponent);
    modalRef.componentInstance.serviciopersona = serviciopersonas;
    modalRef.componentInstance.guardarServicio
    .subscribe((guardarServicio: Accion ) => {
      this.guardarServicio.emit(guardarServicio);
    });
    }

  public eliminarServicio(i: number) {
    this.serviciopersonas.splice(i, 1);
  }

}

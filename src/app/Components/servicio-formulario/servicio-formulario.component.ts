import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { acciones } from 'src/app/enums/acciones';
import { Accion } from 'src/app/Models/accion';
import { Persona } from 'src/app/Models/persona';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-servicio-formulario',
  templateUrl: './servicio-formulario.component.html',
  styleUrls: ['./servicio-formulario.component.scss']
})
export class ServicioFormularioComponent implements OnInit {

   @Output() guardarServicio = new EventEmitter<Accion>();
  @Input() serviciopersona!: Persona;

  public servicioform: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    public _fb: FormBuilder
  ) { 
    this.servicioform = this._fb.group({
      _id: [uuidv4(), Validators.required],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log(this.serviciopersona);
    if(this.serviciopersona){
      this.servicioform.patchValue(this.serviciopersona);
    }
  }

  public guardarserviciopers(){
    if (this.servicioform.invalid) return;
    this.guardarServicio.emit({
    accion: this.serviciopersona ? acciones.UPDATE: acciones.CREATE,
    serviciopersonas: this.servicioform.value
    });
    console.log(this.servicioform.value);
    this.activeModal.close();
  }
}
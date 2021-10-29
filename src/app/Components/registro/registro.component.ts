import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Registro } from 'src/app/Models/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public registro: Array<Registro> = [];
  public registroform: FormGroup;

  constructor(
    private modalservice: NgbModal,
    public activeModal: NgbActiveModal,
    public _fb: FormBuilder
  ) {
    this.registroform = this._fb.group({
      usuario: ['', [Validators.required]],
      correo: ['',[Validators.required]],
      contraseña: ['', [Validators.required]]
   });
  }

  ngOnInit(

  ): void {
  }

  public Registrar(){
    if (this.registroform.invalid) return;
    this.registro.push(this.registroform.value)
    console.log(this.registro);
    alert("Se ha registrado con exito");
    this.activeModal.close();
  }

}

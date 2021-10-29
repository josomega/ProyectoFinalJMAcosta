import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginform: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    public _fb: FormBuilder
  ) {
    this.loginform = this._fb.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }
  public inicio(){
    if (this.loginform.invalid) return;
    alert("Inicio Sesion Correctamente");
    // this.guardarserv.emit({
    // accion: this.serviciopersona ? acciones.UPDATE: acciones.CREATE,
    // serviciopersona: this.servicioform.value
    // });
    // console.log(this.servicioform.value);
    // this.activeModal.close();
  }
}

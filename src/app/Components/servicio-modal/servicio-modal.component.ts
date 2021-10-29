import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicio-modal',
  templateUrl: './servicio-modal.component.html',
  styleUrls: ['./servicio-modal.component.scss']
})
export class ServicioModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}

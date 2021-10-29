import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public mensaje(){
  alert("Ponganos nota mayor a 80 a todos");
}

}

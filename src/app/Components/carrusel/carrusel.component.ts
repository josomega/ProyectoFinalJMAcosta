import { Component, OnInit } from '@angular/core';
import { Carruselimg } from '../../Models/carruselimg';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})

export class CarruselComponent implements OnInit {

  
  public carrusel: Carruselimg = this.initCarrusel();

  constructor() { }

  ngOnInit(): void {
  }

  private initCarrusel(): Carruselimg {
    return {
      imagenes: [
        {
          src: './assets/imagenes/ImgBanner1.jpg',
          alt: 'BANNER 1'
        },
        {
          src: './assets/imagenes/ImgBanner2.jpg',
          alt: 'BANNER 2'
        },
        {
          src: './assets/imagenes/ImgBanner3.png',
          alt: 'BANNER 3'
        },
        {
          src: './assets/imagenes/ImgBanner4.jpg',
          alt: 'BANNER 4'
        }
      ]
    };
  }
}

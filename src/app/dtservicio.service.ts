import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DtservicioService {

  constructor() { }
  public getDtOptions() {
    return {
      pagingType: 'full_numbers',
      pageLength: 2,
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'excel'
      ]
    };
  }
}

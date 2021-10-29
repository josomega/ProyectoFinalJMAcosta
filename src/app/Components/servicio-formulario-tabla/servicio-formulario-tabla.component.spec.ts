import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioFormularioTablaComponent } from './servicio-formulario-tabla.component';

describe('ServicioFormularioTablaComponent', () => {
  let component: ServicioFormularioTablaComponent;
  let fixture: ComponentFixture<ServicioFormularioTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioFormularioTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioFormularioTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioFormularioComponent } from './servicio-formulario.component';

describe('ServicioFormularioComponent', () => {
  let component: ServicioFormularioComponent;
  let fixture: ComponentFixture<ServicioFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

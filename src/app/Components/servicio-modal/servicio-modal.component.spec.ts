import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioModalComponent } from './servicio-modal.component';

describe('ServicioModalComponent', () => {
  let component: ServicioModalComponent;
  let fixture: ComponentFixture<ServicioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

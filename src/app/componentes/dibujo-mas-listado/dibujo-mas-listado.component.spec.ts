import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujoMasListadoComponent } from './dibujo-mas-listado.component';

describe('DibujoMasListadoComponent', () => {
  let component: DibujoMasListadoComponent;
  let fixture: ComponentFixture<DibujoMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DibujoMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DibujoMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

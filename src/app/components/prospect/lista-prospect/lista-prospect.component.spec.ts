import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProspectComponent } from './lista-prospect.component';

describe('ListaProspectComponent', () => {
  let component: ListaProspectComponent;
  let fixture: ComponentFixture<ListaProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

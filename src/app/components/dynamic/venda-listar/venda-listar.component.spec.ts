import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaListarComponent } from './venda-listar.component';

describe('VendaListarComponent', () => {
  let component: VendaListarComponent;
  let fixture: ComponentFixture<VendaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

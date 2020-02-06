import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoAtualizarComponent } from './endereco-atualizar.component';

describe('EnderecoAtualizarComponent', () => {
  let component: EnderecoAtualizarComponent;
  let fixture: ComponentFixture<EnderecoAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

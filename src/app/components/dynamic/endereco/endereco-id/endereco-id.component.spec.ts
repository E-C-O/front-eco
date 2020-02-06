import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoIdComponent } from './endereco-id.component';

describe('EnderecoIdComponent', () => {
  let component: EnderecoIdComponent;
  let fixture: ComponentFixture<EnderecoIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

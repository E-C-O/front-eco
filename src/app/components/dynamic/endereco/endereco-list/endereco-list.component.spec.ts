import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoListComponent } from './endereco-list.component';

describe('EnderecoListComponent', () => {
  let component: EnderecoListComponent;
  let fixture: ComponentFixture<EnderecoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

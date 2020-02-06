import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosEmpresaComponent } from './sobre-nos-empresa.component';

describe('SobreNosEmpresaComponent', () => {
  let component: SobreNosEmpresaComponent;
  let fixture: ComponentFixture<SobreNosEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreNosEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

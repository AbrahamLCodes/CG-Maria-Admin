import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalNuevoUsuarioSistemaPage } from './modal-nuevo-usuario-sistema.page';

describe('ModalNuevoUsuarioSistemaPage', () => {
  let component: ModalNuevoUsuarioSistemaPage;
  let fixture: ComponentFixture<ModalNuevoUsuarioSistemaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoUsuarioSistemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNuevoUsuarioSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

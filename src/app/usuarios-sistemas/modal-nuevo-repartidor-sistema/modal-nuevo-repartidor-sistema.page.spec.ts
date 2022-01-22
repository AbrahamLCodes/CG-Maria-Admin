import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalNuevoRepartidorSistemaPage } from './modal-nuevo-repartidor-sistema.page';

describe('ModalNuevoRepartidorSistemaPage', () => {
  let component: ModalNuevoRepartidorSistemaPage;
  let fixture: ComponentFixture<ModalNuevoRepartidorSistemaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoRepartidorSistemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNuevoRepartidorSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEditRepartidorSistemaPage } from './modal-edit-repartidor-sistema.page';

describe('ModalEditRepartidorSistemaPage', () => {
  let component: ModalEditRepartidorSistemaPage;
  let fixture: ComponentFixture<ModalEditRepartidorSistemaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditRepartidorSistemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditRepartidorSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

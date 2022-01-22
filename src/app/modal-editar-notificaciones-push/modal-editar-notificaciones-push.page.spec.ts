import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEditarNotificacionesPushPage } from './modal-editar-notificaciones-push.page';

describe('ModalEditarNotificacionesPushPage', () => {
  let component: ModalEditarNotificacionesPushPage;
  let fixture: ComponentFixture<ModalEditarNotificacionesPushPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarNotificacionesPushPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditarNotificacionesPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

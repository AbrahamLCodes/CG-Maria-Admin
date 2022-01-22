import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalVerNotificacionPushPage } from './modal-ver-notificacion-push.page';

describe('ModalVerNotificacionPushPage', () => {
  let component: ModalVerNotificacionPushPage;
  let fixture: ComponentFixture<ModalVerNotificacionPushPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerNotificacionPushPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalVerNotificacionPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

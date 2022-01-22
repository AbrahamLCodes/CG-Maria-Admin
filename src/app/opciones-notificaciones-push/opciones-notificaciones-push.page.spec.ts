import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionesNotificacionesPushPage } from './opciones-notificaciones-push.page';

describe('OpcionesNotificacionesPushPage', () => {
  let component: OpcionesNotificacionesPushPage;
  let fixture: ComponentFixture<OpcionesNotificacionesPushPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesNotificacionesPushPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesNotificacionesPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

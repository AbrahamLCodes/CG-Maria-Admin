import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionesUsuariosAppPage } from './opciones-usuarios-app.page';

describe('OpcionesUsuariosAppPage', () => {
  let component: OpcionesUsuariosAppPage;
  let fixture: ComponentFixture<OpcionesUsuariosAppPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesUsuariosAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesUsuariosAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

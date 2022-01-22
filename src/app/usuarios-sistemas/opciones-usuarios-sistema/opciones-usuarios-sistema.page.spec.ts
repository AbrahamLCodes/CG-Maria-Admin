import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionesUsuariosSistemaPage } from './opciones-usuarios-sistema.page';

describe('OpcionesUsuariosSistemaPage', () => {
  let component: OpcionesUsuariosSistemaPage;
  let fixture: ComponentFixture<OpcionesUsuariosSistemaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesUsuariosSistemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesUsuariosSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

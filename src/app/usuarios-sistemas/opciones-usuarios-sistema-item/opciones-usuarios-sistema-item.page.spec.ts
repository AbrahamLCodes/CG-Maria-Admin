import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionesUsuariosSistemaItemPage } from './opciones-usuarios-sistema-item.page';

describe('OpcionesUsuariosSistemaItemPage', () => {
  let component: OpcionesUsuariosSistemaItemPage;
  let fixture: ComponentFixture<OpcionesUsuariosSistemaItemPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesUsuariosSistemaItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesUsuariosSistemaItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

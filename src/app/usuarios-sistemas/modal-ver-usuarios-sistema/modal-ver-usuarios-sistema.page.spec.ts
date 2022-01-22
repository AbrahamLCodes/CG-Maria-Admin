import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalVerUsuariosSistemaPage } from './modal-ver-usuarios-sistema.page';

describe('ModalVerUsuariosSistemaPage', () => {
  let component: ModalVerUsuariosSistemaPage;
  let fixture: ComponentFixture<ModalVerUsuariosSistemaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerUsuariosSistemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalVerUsuariosSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

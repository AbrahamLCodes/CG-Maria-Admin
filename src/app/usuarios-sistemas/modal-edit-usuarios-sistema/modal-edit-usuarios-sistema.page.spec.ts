import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEditUsuariosSistemaPage } from './modal-edit-usuarios-sistema.page';

describe('ModalEditUsuariosSistemaPage', () => {
  let component: ModalEditUsuariosSistemaPage;
  let fixture: ComponentFixture<ModalEditUsuariosSistemaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditUsuariosSistemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditUsuariosSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

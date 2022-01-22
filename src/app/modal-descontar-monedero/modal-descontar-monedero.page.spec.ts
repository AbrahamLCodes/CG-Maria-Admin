import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDescontarMonederoPage } from './modal-descontar-monedero.page';

describe('ModalDescontarMonederoPage', () => {
  let component: ModalDescontarMonederoPage;
  let fixture: ComponentFixture<ModalDescontarMonederoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDescontarMonederoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDescontarMonederoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

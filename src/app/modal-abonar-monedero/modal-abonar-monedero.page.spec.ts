import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAbonarMonederoPage } from './modal-abonar-monedero.page';

describe('ModalAbonarMonederoPage', () => {
  let component: ModalAbonarMonederoPage;
  let fixture: ComponentFixture<ModalAbonarMonederoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAbonarMonederoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAbonarMonederoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

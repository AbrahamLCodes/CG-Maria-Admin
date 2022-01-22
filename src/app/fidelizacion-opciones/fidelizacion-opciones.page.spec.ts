import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FidelizacionOpcionesPage } from './fidelizacion-opciones.page';

describe('FidelizacionOpcionesPage', () => {
  let component: FidelizacionOpcionesPage;
  let fixture: ComponentFixture<FidelizacionOpcionesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FidelizacionOpcionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FidelizacionOpcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

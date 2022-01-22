import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcionesSeguimientoItemPage } from './opciones-seguimiento-item.page';

describe('OpcionesSeguimientoItemPage', () => {
  let component: OpcionesSeguimientoItemPage;
  let fixture: ComponentFixture<OpcionesSeguimientoItemPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesSeguimientoItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesSeguimientoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

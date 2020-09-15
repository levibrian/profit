import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { CostsPage } from './costs.page';

describe('CostsPage', () => {
  let component: CostsPage;
  let fixture: ComponentFixture<CostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CostsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

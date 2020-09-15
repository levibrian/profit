import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { InvestmentsPage } from './investments.page';

describe('InvestmentsPage', () => {
  let component: InvestmentsPage;
  let fixture: ComponentFixture<InvestmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

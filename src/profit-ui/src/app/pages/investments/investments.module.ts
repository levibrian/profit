import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvestmentsPage } from './investments.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { AppHeaderModule } from '../../components/app-header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InvestmentsRoutingModule,
    AppHeaderModule
  ],
  declarations: [InvestmentsPage]
})
export class InvestmentsModule {}

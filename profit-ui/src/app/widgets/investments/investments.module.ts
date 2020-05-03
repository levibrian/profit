import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvestmentsComponent } from './investments.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { AppHeaderModule } from '../app-header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InvestmentsRoutingModule,
    AppHeaderModule
  ],
  declarations: [InvestmentsComponent]
})
export class InvestmentsModule {}

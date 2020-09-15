import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CostsPage } from './costs.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { CostsRoutingModule } from './costs-routing.module';
import { AppHeaderModule } from '../../components/app-header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CostsRoutingModule,
    AppHeaderModule
  ],
  declarations: [CostsPage]
})
export class CostsModule {}

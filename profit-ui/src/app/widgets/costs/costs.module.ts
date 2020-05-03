import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CostsComponent } from './costs.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CostsRoutingModule } from './costs-routing.module';
import { AppHeaderModule } from '../app-header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CostsRoutingModule,
    AppHeaderModule
  ],
  declarations: [CostsComponent]
})
export class CostsModule {}

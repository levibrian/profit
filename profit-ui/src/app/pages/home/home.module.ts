import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { HomeRoutingModule } from './home-routing.module';
import { AppHeaderModule } from '../../components/app-header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeRoutingModule,
    AppHeaderModule
  ],
  declarations: [HomePage]
})
export class HomeModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomeRoutingModule } from './home-routing.module';
import { AppHeaderModule } from '../app-header/header.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeRoutingModule,
    AppHeaderModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}

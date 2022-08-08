import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrahmaPageRoutingModule } from './brahma-routing.module';

import { BrahmaPage } from './brahma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrahmaPageRoutingModule
  ],
  declarations: [BrahmaPage]
})
export class BrahmaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashbaconPageRoutingModule } from './flashbacon-routing.module';

import { FlashbaconPage } from './flashbacon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashbaconPageRoutingModule
  ],
  declarations: [FlashbaconPage]
})
export class FlashbaconPageModule {}

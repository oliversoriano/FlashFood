import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashburguerPageRoutingModule } from './flashburguer-routing.module';

import { FlashburguerPage } from './flashburguer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashburguerPageRoutingModule
  ],
  declarations: [FlashburguerPage]
})
export class FlashburguerPageModule {}

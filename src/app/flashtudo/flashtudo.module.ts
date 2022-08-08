import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashtudoPageRoutingModule } from './flashtudo-routing.module';

import { FlashtudoPage } from './flashtudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashtudoPageRoutingModule
  ],
  declarations: [FlashtudoPage]
})
export class FlashtudoPageModule {}

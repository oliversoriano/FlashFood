import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntarticaPageRoutingModule } from './antartica-routing.module';

import { AntarticaPage } from './antartica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntarticaPageRoutingModule
  ],
  declarations: [AntarticaPage]
})
export class AntarticaPageModule {}

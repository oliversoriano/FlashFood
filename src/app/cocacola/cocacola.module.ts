import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocacolaPageRoutingModule } from './cocacola-routing.module';

import { CocacolaPage } from './cocacola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocacolaPageRoutingModule
  ],
  declarations: [CocacolaPage]
})
export class CocacolaPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashburguerPage } from './flashburguer.page';

const routes: Routes = [
  {
    path: '',
    component: FlashburguerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashburguerPageRoutingModule {}

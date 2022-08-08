import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashbaconPage } from './flashbacon.page';

const routes: Routes = [
  {
    path: '',
    component: FlashbaconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashbaconPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrahmaPage } from './brahma.page';

const routes: Routes = [
  {
    path: '',
    component: BrahmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrahmaPageRoutingModule {}

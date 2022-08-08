import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocacolaPage } from './cocacola.page';

const routes: Routes = [
  {
    path: '',
    component: CocacolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocacolaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntarticaPage } from './antartica.page';

const routes: Routes = [
  {
    path: '',
    component: AntarticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntarticaPageRoutingModule {}

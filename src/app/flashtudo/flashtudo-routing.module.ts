import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashtudoPage } from './flashtudo.page';

const routes: Routes = [
  {
    path: '',
    component: FlashtudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashtudoPageRoutingModule {}

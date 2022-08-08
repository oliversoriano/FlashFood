import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lanches',
    loadChildren: () => import('./lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'flashbacon',
    loadChildren: () => import('./flashbacon/flashbacon.module').then( m => m.FlashbaconPageModule)
  },
  {
    path: 'flashburguer',
    loadChildren: () => import('./flashburguer/flashburguer.module').then( m => m.FlashburguerPageModule)
  },
  {
    path: 'flashtudo',
    loadChildren: () => import('./flashtudo/flashtudo.module').then( m => m.FlashtudoPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'cocacola',
    loadChildren: () => import('./cocacola/cocacola.module').then( m => m.CocacolaPageModule)
  },
  {
    path: 'antartica',
    loadChildren: () => import('./antartica/antartica.module').then( m => m.AntarticaPageModule)
  },
  {
    path: 'brahma',
    loadChildren: () => import('./brahma/brahma.module').then( m => m.BrahmaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

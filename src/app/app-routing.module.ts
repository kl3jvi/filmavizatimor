import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'masha', loadChildren: './masha/masha.module#MashaPageModule' },
  { path: 'spongebob', loadChildren: './spongebob/spongebob.module#SpongebobPageModule' },
  { path: 'pantera', loadChildren: './pantera/pantera.module#PanteraPageModule' },
  { path: 'filma', loadChildren: './filma/filma.module#FilmaPageModule' },
  { path: 'seriale', loadChildren: './seriale/seriale.module#SerialePageModule' },
  { path: 'mrbean', loadChildren: './mrbean/mrbean.module#MrbeanPageModule' },
  { path: 'tom', loadChildren: './tom/tom.module#TomPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

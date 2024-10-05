import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TailorsPage } from './tailors.page';

const routes: Routes = [
  {
    path: '',
    component: TailorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TailorsPageRoutingModule {}

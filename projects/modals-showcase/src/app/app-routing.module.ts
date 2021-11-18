import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisualComponent } from './visual/visual.component';

import { ConfirmVisualComponent } from './visual/confirm/confirm-visual.component';

import { ModalVisualComponent } from './visual/modal/modal-visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent,
  },
  {
    path: 'visual/confirm',
    component: ConfirmVisualComponent,
  },
  {
    path: 'visual/modal',
    component: ModalVisualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

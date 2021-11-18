import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SkyInputBoxModule } from '@skyux/forms';
import { SkyTilesModule } from '@skyux/tiles';

import { SkyModalModule } from '../../../../modals/src/public-api';

import { ConfirmVisualComponent } from './confirm/confirm-visual.component';

import { ModalCloseConfirmComponent } from './modal/modal-close-confirm.component';
import { ModalContentAutofocusComponent } from './modal/modal-content-autofocus.component';
import { ModalContentDemoComponent } from './modal/modal-content-demo.component';
import { ModalDemoComponent } from './modal/modal-demo.component';
import { ModalFormDemoComponent } from './modal/modal-form-demo.component';
import { ModalFullPageDemoComponent } from './modal/modal-fullpage-demo.component';
import { ModalLargeDemoComponent } from './modal/modal-large-demo.component';
import { ModalTiledDemoComponent } from './modal/modal-tiled-demo.component';
import { ModalVisualComponent } from './modal/modal-visual.component';
import { VisualComponent } from './visual.component';
import { SkyE2eThemeSelectorModule } from '@skyux/e2e-client';

@NgModule({
  declarations: [
    ConfirmVisualComponent,
    ModalCloseConfirmComponent,
    ModalContentAutofocusComponent,
    ModalContentDemoComponent,
    ModalDemoComponent,
    ModalFormDemoComponent,
    ModalFullPageDemoComponent,
    ModalLargeDemoComponent,
    ModalTiledDemoComponent,
    ModalVisualComponent,
    VisualComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SkyE2eThemeSelectorModule,
    SkyInputBoxModule,
    SkyModalModule,
    SkyTilesModule,
  ],
})
export class VisualModule {}

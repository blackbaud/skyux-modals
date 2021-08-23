import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SkyIdModule } from '@skyux/core';
import { SkyDocsToolsModule } from '@skyux/docs-tools';
import { SkyInputBoxModule } from '@skyux/forms';
import { SkyTilesModule } from '@skyux/tiles';

import { SkyConfirmModule, SkyModalModule } from 'projects/modals/src/public-api';

import { ConfirmVisualComponent } from './confirm/confirm-visual.component';

import { ModalCloseConfirmComponent } from './modal/modal-close-confirm.component';
import { ModalContentDemoComponent } from './modal/modal-content-demo.component';
import { ModalDemoComponent } from './modal/modal-demo.component';
import { ModalFormDemoComponent } from './modal/modal-form-demo.component';
import { ModalFullPageDemoComponent } from './modal/modal-fullpage-demo.component';
import { ModalLargeDemoComponent } from './modal/modal-large-demo.component';
import { ModalTiledDemoComponent } from './modal/modal-tiled-demo.component';
import { ModalVisualComponent } from './modal/modal-visual.component';
import { ModalContentAutofocusComponent } from './modal/modal-content-autofocus.component';

@NgModule({
  declarations: [
    ConfirmVisualComponent,
    ModalVisualComponent,
    ModalCloseConfirmComponent,
    ModalContentDemoComponent,
    ModalContentAutofocusComponent,
    ModalDemoComponent,
    ModalFormDemoComponent,
    ModalFullPageDemoComponent,
    ModalLargeDemoComponent,
    ModalTiledDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkyConfirmModule,
    SkyDocsToolsModule,
    SkyIdModule,
    SkyInputBoxModule,
    SkyModalModule,
    SkyTilesModule
  ]
})
export class VisualModule { }

import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyThemeModule
} from '@skyux/theme';

import {
  SkyModalsResourcesModule
} from '../shared/sky-modals-resources.module';

import {
  SkyModalContentComponent
} from './modal-content.component';

import {
  SkyModalFooterComponent
} from './modal-footer.component';

import {
  SkyModalHeaderComponent
} from './modal-header.component';

import {
  SkyModalHostComponent
} from './modal-host.component';

import {
  SkyModalScrollShadowDirective
} from './modal-scroll-shadow.directive';

import {
  SkyModalComponent
} from './modal.component';

@NgModule({
  declarations: [
    SkyModalComponent,
    SkyModalContentComponent,
    SkyModalFooterComponent,
    SkyModalHeaderComponent,
    SkyModalHostComponent,
    SkyModalScrollShadowDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    SkyIconModule,
    SkyModalsResourcesModule,
    SkyThemeModule
  ],
  exports: [
    // Libraries that compile using the View Engine should export any
    // modules used by their entry components.
    //#region Entry component modules
    SkyIconModule,
    //#endregion
    SkyModalComponent,
    SkyModalContentComponent,
    SkyModalFooterComponent,
    SkyModalHeaderComponent
  ],
  entryComponents: [
    SkyModalHostComponent
  ]
})
export class SkyModalModule { }

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
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyThemeModule,
  SkyThemeService
} from '@skyux/theme';

import {
  SkyModalForRootCompatModule
} from '../shared/modal-for-root-compat.module';

import {
  SkyModalsResourcesModule
} from '../shared/modals-resources.module';

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
  providers: [
    SkyThemeService
  ],
  imports: [
    CommonModule,
    RouterModule,
    SkyI18nModule,
    SkyIconModule,
    SkyModalForRootCompatModule,
    SkyModalsResourcesModule,
    SkyThemeModule
  ],
  exports: [
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

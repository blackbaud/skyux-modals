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

// Libraries that compile using the View Engine should export any
// modules used by their entry components.
const entryComponentModules = [
  SkyIconModule
];

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
    SkyI18nModule,
    SkyIconModule,
    SkyModalsResourcesModule,
    SkyThemeModule
  ],
  exports: [
    SkyModalComponent,
    SkyModalContentComponent,
    SkyModalFooterComponent,
    SkyModalHeaderComponent,
    ...entryComponentModules
  ],
  entryComponents: [
    SkyModalHostComponent
  ]
})
export class SkyModalModule { }

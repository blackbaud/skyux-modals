import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyThemeModule
} from '@skyux/theme';

import {
  SkyModalModule
} from '../modal/modal.module';

import {
  SkyModalsResourcesModule
} from '../shared/modals-resources.module';

import {
  SkyConfirmComponent
} from './confirm.component';

@NgModule({
  declarations: [
    SkyConfirmComponent
  ],
  imports: [
    CommonModule,
    SkyI18nModule,
    SkyModalModule,
    SkyModalsResourcesModule,
    SkyThemeModule
  ],
  exports: [
    SkyConfirmComponent
  ],
  entryComponents: [
    SkyConfirmComponent
  ]
})
export class SkyConfirmModule { }

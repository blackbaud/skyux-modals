import {
  NgModule
} from '@angular/core';

import {
  MutationObserverService,
  SkyAppWindowRef,
  SkyDynamicComponentService
} from '@skyux/core';

/**
 * @internal
 * @deprecated This module can be removed after we upgrade SKY UX development dependencies to version 5.
 */
 @NgModule({
  providers: [
    MutationObserverService,
    SkyAppWindowRef,
    SkyDynamicComponentService
  ]
})
export class SkyModalForRootCompatModule {}

import {
  EventEmitter
} from '@angular/core';

import {
  SkyConfirmCloseEventArgs
} from './types/confirm-closed-event-args';

export class SkyConfirmInstance {
  public closed = new EventEmitter<SkyConfirmCloseEventArgs>();
}

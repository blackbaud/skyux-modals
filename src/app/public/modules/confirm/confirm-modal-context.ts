import {
  SkyConfirmButtonConfig
} from './types/confirm-button-config';

import {
  SkyConfirmConfig
} from './types/confirm-config';

import {
  SkyConfirmType
} from './types/confirm-type';

/* istanbul ignore next */
export class SkyConfirmModalContext implements SkyConfirmConfig {
  public message: string;
  public body: string;
  public buttons: SkyConfirmButtonConfig[];
  public preserveWhiteSpace: boolean;
  public type: SkyConfirmType;
}

import {
  SkyConfirmType
} from './confirm-type';

import {
  SkyConfirmButtonConfig
} from './confirm-button-config';

export interface SkyConfirmConfig {
  /**
   * Specifies the message to display in a bold font at the top of the dialog.
   * @required
   */
  message: string;
  /**
   * Specifies secondary text to display in plain font under the primary message.
   */
  body?: string;
  /**
   * Specifies an array of `SkyConfirmButtonConfig` objects that overwrite the default
   * configuration for buttons. The number of items in the array must match the number of
   * buttons that the `type` property specifies.
   */
  buttons?: SkyConfirmButtonConfig[];
  /**
   * Indicates whether to preserve whitespace and new lines inside the confirm component.
   * @default false
   */
  preserveWhiteSpace?: boolean;
  /**
   * Specifies a SkyConfirmType enum that indicates how many buttons to include in the dialog.
   */
  type?: SkyConfirmType;
}

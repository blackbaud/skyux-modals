import {
  Component
} from '@angular/core';

import {
  BehaviorSubject,
  Observable
} from 'rxjs';

import {
  SkyLibResourcesService
} from '@skyux/i18n';

import {
  SkyModalInstance
} from '../modal-instance';

import {
  SkyModalCloseConfirmConfiguration
} from './modal-close-confirm-configuration';

@Component({
  selector: 'sky-modal-close-confirm',
  templateUrl: './modal-close-confirm.component.html',
  styleUrls: ['./modal-close-confirm.component.scss']
})
export class SkyModalCloseConfirmComponent {
  public configuration = new BehaviorSubject<SkyModalCloseConfirmConfiguration>({
    message: '',
    confirmButtonText: '',
    cancelButtonText: ''
  });

  constructor(
    private modal: SkyModalInstance,
    private resourcesSvc: SkyLibResourcesService,
    customConfig: SkyModalCloseConfirmConfiguration
  ) {
    Observable.zip(
      this.resourcesSvc.getString('skyux_modal_close_confirm_message'),
      this.resourcesSvc.getString('skyux_confirm_dialog_default_yes_text'),
      this.resourcesSvc.getString('skyux_confirm_dialog_default_cancel_text')
    ).subscribe(vals => {
      this.configuration.next({
        message: (customConfig && customConfig.message) || vals[0],
        confirmButtonText: (customConfig && customConfig.confirmButtonText) || vals[1],
        cancelButtonText: (customConfig && customConfig.cancelButtonText) || vals[2]
      });
    });
  }

  public close(action: 'yes' | 'cancel') {
    this.modal.close(action);
  }
}

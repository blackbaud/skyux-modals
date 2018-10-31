import { Component } from '@angular/core';

import { SkyModalInstance } from '../../public';

@Component({
  selector: 'sky-test-cmp-modal-close-confirm',
  templateUrl: './modal-close-confirm.component.html'
})
export class ModalCloseConfirmComponent {
  public hasUnsavedWork = true;
  public confirmationConfig = {};

  constructor(public instance: SkyModalInstance) {}
}

import { Component } from '@angular/core';

import { SkyModalInstance } from '../../../../../modals/src/public-api';

@Component({
  selector: 'app-test-cmp-modal-autofocus',
  templateUrl: './modal-content-autofocus.component.html',
})
export class ModalContentAutofocusComponent {
  constructor(public instance: SkyModalInstance) {}
}

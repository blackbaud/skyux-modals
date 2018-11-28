import {
  Component
} from '@angular/core';

import {
  SkyModalBeforeCloseHandler
} from '../types';

@Component({
  selector: 'sky-test-cmp',
  templateUrl: './modal-with-close-confirm.component.fixture.html'
})
export class ModalWithCloseConfirmTestComponent {
  public unsavedWork = true;

  public toggleUnsavedWork() {
    this.unsavedWork = !this.unsavedWork;
  }

  public close(handler: SkyModalBeforeCloseHandler) {
    if (!this.unsavedWork) {
      handler.close();
    }
  }
}

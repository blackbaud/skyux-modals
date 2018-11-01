import {
  Component
} from '@angular/core';

@Component({
  selector: 'sky-test-cmp',
  templateUrl: './modal-with-close-confirm.component.fixture.html'
})
export class ModalWithCloseConfirmTestComponent {
  public config = {};

  public switchToBoolean() {
    this.config = true;
  }

  public changeConfig() {
    this.config = {
      message: 'I am a custom message',
      confirmButtonText: 'Custom Confirm',
      cancelButtonText: 'Custom Cancel'
    };
  }
}

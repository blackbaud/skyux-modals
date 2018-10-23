import {
  Component
} from '@angular/core';

import {
  SkyModalInstance
} from '../modal-instance';

@Component({
  selector: 'sky-modal-work-confirm',
  templateUrl: './modal-work-confirm.component.html',
  styleUrls: ['./modal-work-confirm.component.scss']
})
export class SkyModalWorkConfirmComponent {
  public message: string;
  public body: string;

  constructor(
    private modal: SkyModalInstance
  ) { }

  public close(action: 'yes' | 'cancel') {
    this.modal.close(action);
  }
}

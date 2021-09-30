import {
  Component
} from '@angular/core';

import {
  SkyModalInstance,
  SkyModalService
} from '../../../../../modals/src/public-api';

@Component({
  selector: 'app-test-cmp-modal',
  templateUrl: './modal-form-demo.component.html',
  providers: [SkyModalService]
})
export class ModalFormDemoComponent {

  public title = 'Modal form with scroll';

  constructor(
    public instance: SkyModalInstance
  ) { }

}

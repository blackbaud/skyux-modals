import {
  Component
} from '@angular/core';

import {
  SkyModalService
} from 'projects/modals/src/public-api';

@Component({
  selector: 'app-test-cmp-modal-fullpage',
  templateUrl: './modal-fullpage-demo.component.html',
  providers: [SkyModalService]
})
export class ModalFullPageDemoComponent {
  public title = 'Hello world';
}

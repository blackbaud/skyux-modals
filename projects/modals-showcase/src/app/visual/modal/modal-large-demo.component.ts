import {
  Component
} from '@angular/core';

import {
  SkyModalService
} from 'projects/modals/src/public-api';

@Component({
  selector: 'app-test-cmp-modal-large',
  templateUrl: './modal-large-demo.component.html',
  providers: [SkyModalService]
})
export class ModalLargeDemoComponent {
  public title = 'Hello world';
}

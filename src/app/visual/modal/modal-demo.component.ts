import { Component, OnInit } from '@angular/core';

import { SkyModalService } from '../../public';

@Component({
  selector: 'sky-test-cmp-modal',
  templateUrl: './modal-demo.component.html',
  providers: [SkyModalService]
})
export class ModalDemoComponent {
  public title = 'Hello world';
}

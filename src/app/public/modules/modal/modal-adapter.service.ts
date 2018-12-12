import {
  Injectable
} from '@angular/core';

import {
  SkyWindowRefService
} from '@skyux/core';

@Injectable()
export class SkyModalAdapterService {
  private static readonly MODAL_BODY_FULL_CLASS = 'sky-modal-body-full-page';
  private static readonly MODAL_BODY_CLASS = 'sky-modal-body-open';

  private docRef: any;
  private bodyEl: HTMLElement;

  // NOTE: In future breaking change - remove optional from RendererFactory2 paramater.
  // Currently there to avoid a breaking change
  constructor(
    private windowRef: SkyWindowRefService
  ) {
    this.docRef = this.windowRef.getWindow().document;
    this.bodyEl = this.windowRef.getWindow().document.body;
  }

  /**
   * @deprecated since `SkyDynamicComponentService` was added to `SkyModalService`
   */
  public addHostEl(): void {
  }

  /**
   * @deprecated since `SkyDynamicComponentService` was added to `SkyModalService`
   */
  public removeHostEl(): void {
  }

  public toggleFullPageModalClass(isAddFull: boolean): void {
    if (isAddFull) {
      this.addClassToBody(SkyModalAdapterService.MODAL_BODY_FULL_CLASS);
    } else {
      this.removeClassFromBody(SkyModalAdapterService.MODAL_BODY_FULL_CLASS);
    }
  }

  public setPageScroll(isAdd: boolean): void {
    if (isAdd) {
      this.addClassToBody(SkyModalAdapterService.MODAL_BODY_CLASS);
    } else {
      this.removeClassFromBody(SkyModalAdapterService.MODAL_BODY_CLASS);
    }
  }

  public getModalOpener(): HTMLElement {
    return <HTMLElement>this.docRef.activeElement;
  }

  private addClassToBody(className: string): void {
    this.bodyEl.classList.add(className);
  }

  private removeClassFromBody(className: string): void {
    this.bodyEl.classList.remove(className);
  }
}

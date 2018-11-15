import {
  Injectable, RendererFactory2, Renderer2, ComponentRef, EmbeddedViewRef
} from '@angular/core';

import { SkyWindowRefService } from '@skyux/core';
import { SkyModalHostComponent } from './modal-host.component';

@Injectable()
export class SkyModalAdapterService {
  private static readonly MODAL_BODY_FULL_CLASS = 'sky-modal-body-full-page';
  private static readonly MODAL_BODY_CLASS = 'sky-modal-body-open';

  private docRef: any;
  private bodyEl: HTMLElement;
  private renderer: Renderer2;
  private hostRef: ComponentRef<SkyModalHostComponent>;

  constructor(
    private rendererFactory: RendererFactory2,
    private windowRef: SkyWindowRefService
  ) {
      this.renderer = this.rendererFactory.createRenderer(undefined, undefined);
      this.docRef = this.windowRef.getWindow().document;
      this.bodyEl = this.windowRef.getWindow().document.body;
  }

  public addHostEl(): void {
    const domElem = (this.hostRef.hostView as EmbeddedViewRef<any>).rootNodes[0];

    this.renderer.appendChild(this.bodyEl, domElem);
  }

  public removeHostEl(): void {
    const element = this.docRef.querySelector('sky-modal-host');
    if (element) {
      this.renderer.removeChild(document.body, element);
    }
  }

  // TODO: In future breaking change remove this method and change `addHostEl` to take in the dom
  // element. This could not currently be done as it would have been a breaking change to
  // `addHostEl`. Also could not move the ComponentRef creating into adapter as the `Injector`
  // dependency is a circular dependency in this injectable service
  public setHostRef(ref: ComponentRef<SkyModalHostComponent>) {
    this.hostRef = ref;
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
    this.renderer.addClass(this.bodyEl, className);
  }

  private removeClassFromBody(className: string): void {
    this.renderer.removeClass(this.bodyEl, className);
  }
}

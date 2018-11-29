import {
  Injectable,
  Optional,
  Renderer2,
  RendererFactory2
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
  private renderer: Renderer2;
  private hostDomElem: Element;

  // NOTE: In future breaking change - remove optional from RendererFactory2 paramater.
  // Currently there to avoid a breaking change
  constructor(
    private windowRef: SkyWindowRefService,
    @Optional() private rendererFactory?: RendererFactory2
  ) {
    // RendererFactory2 is optional to avoid breaking changes for consumer unit tests.
    // However, due to this being core functionality we are throwing an error
    if (!this.rendererFactory) {
      throw ('Please inject RenderFactory2');
    }
    this.renderer = this.rendererFactory.createRenderer(undefined, undefined);
    this.docRef = this.windowRef.getWindow().document;
    this.bodyEl = this.windowRef.getWindow().document.body;
  }

  public addHostEl(): void {
    this.renderer.appendChild(this.bodyEl, this.hostDomElem);
  }

  public removeHostEl(): void {
    const element = this.docRef.querySelector('sky-modal-host');
    if (element) {
      this.renderer.removeChild(this.bodyEl, element);
    }
  }

  // TODO: In future breaking change remove this method and change `addHostEl` to take in the dom
  // element. This could not currently be done as it would have been a breaking change to
  // `addHostEl`. Also could not move the ComponentRef creating into adapter as the `Injector`
  // dependency is a circular dependency in this injectable service
  public setHostDomElem(domElem: Element) {
    this.hostDomElem = domElem;
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

import {
  ComponentFixture
} from '@angular/core/testing';

/**
 * Allows interaction with a SKY UX modal component.
 */
export class SkyModalFixture {

  private modalElement: HTMLElement;

  constructor(
    private fixture: ComponentFixture<any>,
    skyTestId: string
  ) {
    this.modalElement = document.querySelector('sky-modal[data-sky-id="' + skyTestId + '"]');

    if (!this.modalElement) {
      throw new Error(`No element was found with a \`data-sky-id\` value of "${skyTestId}".`);
    }
  }

  /**
   * The modal component's ARIA describedby attribute.
   */
  public get ariaDescribedBy(): string {
    const modalDialogElement = this.getModalDiaglogElement();
    if (modalDialogElement) {
      return modalDialogElement.getAttribute('aria-describedby') || undefined;
    }
  }

  /**
   * The modal component's ARIA labelledby attribute.
   */
  public get ariaLabelledBy(): string {
    const modalDialogElement = this.getModalDiaglogElement();
    if (modalDialogElement) {
      return modalDialogElement.getAttribute('aria-labelledby') || undefined;
    }
  }

  /**
   * The modal component's role attribute.
   */
  public get ariaRole(): string {
    const modalDialogElement = this.getModalDiaglogElement();
    if (modalDialogElement) {
      return modalDialogElement.getAttribute('role') || undefined;
    }
  }

  /**
   * Whether or not the modal is a full page modal.
   */
  public get fullPage(): boolean {
    const modalDivElement = this.getModalDiv();
    if (modalDivElement) {
      return modalDivElement.classList.contains('sky-modal-full-page');
    }
  }

  /**
   * The size of the modal.
   */
  public get size(): string {
    const modalDivElement = this.getModalDiv();

    if (modalDivElement) {
      const possibleSizes = ['small', 'medium', 'large'];

      for (let size of possibleSizes) {
        if (modalDivElement.classList.contains('sky-modal-' + size)) {
          return size;
        }
      }
    }
  }

  /**
   * Whether or not the modal is set up for tiled content.
   */
  public get tiledBody(): boolean {
    const modalDivElement = this.getModalDiv();
    if (modalDivElement) {
      return modalDivElement.classList.contains('sky-modal-tiled');
    }
  }

  /**
   * Clicks the modal header's "close" button.
   */
  public clickHeaderCloseButton(): void {
    const closeButton: HTMLElement = this.modalElement
      .querySelector('.sky-modal .sky-modal-btn-close');

    if (closeButton) {
      closeButton.click();
      this.fixture.detectChanges();
    } else {
      throw new Error(`No header close button exists.`);
    }
  }

  /**
   * Clicks the modal header's "help" button.
   */
  public clickHelpButton(): void {
    const helpButton: HTMLElement = this.modalElement
      .querySelector('.sky-modal .sky-modal-header-buttons button[name="help-button"]');

    if (helpButton) {
      helpButton.click();
      this.fixture.detectChanges();
    } else {
      throw new Error(`No help button exists.`);
    }
  }

  /**
   * Returns the main modal element.
   */
  public getModalDiv(): any {
    return this.modalElement.querySelector('.sky-modal');
  }

  /**
   * Returns the modal's content element.
   */
  public getModalContentEl(): any {
    return this.modalElement.querySelector('.sky-modal-content');
  }

  /**
   * Returns the modal's footer element.
   */
  public getModalFooterEl(): any {
    return this.modalElement.querySelector('.sky-modal-footer');
  }

  /**
   * Returns the modal's header element.
   */
  public getModalHeaderEl(): any {
    return this.modalElement.querySelector('.sky-modal-header');
  }

  private getModalDiaglogElement(): HTMLElement {
    return this.modalElement.querySelector('.sky-modal-dialog');
  }

}

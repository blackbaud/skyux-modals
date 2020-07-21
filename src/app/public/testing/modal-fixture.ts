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
    const modalElement = this.getModalDiaglogElement();
    return modalElement.getAttribute('aria-describedby') || undefined;
  }

  /**
   * The modal component's ARIA labelledby attribute.
   */
  public get ariaLabelledBy(): string {
    const modalElement = this.getModalDiaglogElement();
    return modalElement.getAttribute('aria-labelledby') || undefined;
  }

  /**
   * The modal component's role attribute.
   */
  public get ariaRole(): string {
    const modalElement = this.getModalDiaglogElement();
    return modalElement.getAttribute('role') || undefined;
  }

  /**
   * Whether or not the modal is a full page modal
   */
  public get fullPage(): boolean {
    return this.getModalEl().classList.contains('sky-modal-full-page');
  }

  /**
   * The size of the modal
   */
  public get size(): string {
    const modalElement = this.getModalEl();
    const possibleSizes = ['small', 'medium', 'large'];

    for (let size of possibleSizes) {
      if (modalElement.classList.contains('sky-modal-' + size)) {
        return size;
      }
    }
  }

  /**
   * Whether or not the modal is set up for tiled content
   */
  public get tiledBody(): boolean {
    return this.getModalEl().classList.contains('sky-modal-tiled');
  }

  /**
   * Clicks the modal header's "close" button
   */
  public clickHeaderCloseButton(): void {
    const clostButton: HTMLElement = this.modalElement
      .querySelector('.sky-modal .sky-modal-btn-close');
    clostButton.click();
    this.fixture.detectChanges();
  }

  /**
   * Clicks the modal header's "help" button
   */
  public clickHelpButton(): void {
    const helpButton: HTMLElement = this.modalElement
      .querySelector('.sky-modal .sky-modal-header-buttons button[name="help-button"]');
    helpButton.click();
    this.fixture.detectChanges();
  }

  /**
   * Returns the main modal element
   */
  public getModalEl(): any {
    return this.modalElement.querySelector('.sky-modal');
  }

  /**
   * Returns the modal's content element
   */
  public getModalContentEl(): any {
    return this.modalElement.querySelector('.sky-modal-content');
  }

  /**
   * Returns the modal's footer element
   */
  public getModalFooterEl(): any {
    return this.modalElement.querySelector('.sky-modal-footer');
  }

  /**
   * Returns the modal's header element
   */
  public getModalHeaderEl(): any {
    return this.modalElement.querySelector('.sky-modal-header');
  }

  private getModalDiaglogElement(): HTMLElement {
    return this.modalElement.querySelector('.sky-modal-dialog');
  }

}

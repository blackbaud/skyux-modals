
import {
  fakeAsync,
  TestBed,
  tick,
  ComponentFixture
} from '@angular/core/testing';

import {
  Component,
  NgModule
} from '@angular/core';

import {
  RouterTestingModule
} from '@angular/router/testing';

import {
  SkyThemeService
} from '@skyux/theme';

import {
  SkyModalFixture
} from './modal-fixture';

import {
  SkyModalModule
} from '../modules/modal/modal.module';

import {
  SkyModalService
} from '../modules/modal/modal.service';

import {
  ModalMockThemeService
} from '../modules/modal/fixtures/mock-theme.service';

import {
  SkyModalInstance
} from '../modules/modal/modal-instance';

//#region Test component
@Component({
  selector: 'modal-test',
  template: `
<sky-modal
  data-sky-id="test-modal"
>
  <sky-modal-header>
    Test Title
  </sky-modal-header>
  <sky-modal-content>
    <div
      class="test-class"
      id="test-modal-content-1"
    >
      This modal can have content!
    </div>
  </sky-modal-content>
  <sky-modal-footer>
    <button
      class="sky-btn sky-btn-primary"
      id="test-modal-button"
      type="button"
    >
      Close
    </button>
  </sky-modal-footer>
</sky-modal>

<!-- This span is important to test the querySelectorAll function -->
<span
  class="test-class"
  id="test-modal-content-2"
>
  Non-modal content
</span>
`
})
class TestModalComponent {}

@Component({
  selector: 'modal-test',
  template: `
<button
  class="sky-btn sky-btn-primary"
  id="test-launch-button"
  type="button"
  (click)="launchModal()"
>
  Launch modal
</button>
`
})
class TestComponent {

  public ariaDescribedBy: string;

  public ariaLabelledBy: string;

  public ariaRole: string;

  public fullPage: boolean;

  public helpKey: string;

  public size: string;

  public tiledBody: boolean;

  private modalInstance: SkyModalInstance;

  constructor(private modalService: SkyModalService) {}

  public launchModal() {
    this.modalInstance = this.modalService.open(TestModalComponent, {
      ariaDescribedBy: this.ariaDescribedBy,
      ariaLabelledBy: this.ariaLabelledBy,
      ariaRole: this.ariaRole,
      helpKey: this.helpKey,
      size: this.size,
      fullPage: this.fullPage,
      tiledBody: this.tiledBody
    });

    this.modalInstance.helpOpened.subscribe((key: string) => {
      this.helpTriggered(key);
    });
  }

  public closeModal() {
    this.modalInstance.close();
  }

  public helpTriggered(key: string) {
    return;
  }

}

@NgModule({
  declarations: [
    TestComponent,
    TestModalComponent
  ],
  imports: [
    RouterTestingModule,
    SkyModalModule
  ],
  providers: [
    {
      provide: SkyThemeService,
      useClass: ModalMockThemeService
    }
  ],
  entryComponents: [
    TestModalComponent
  ]
})
class TestModule { }

//#endregion Test component

describe('Modal fixture', () => {

  let fixture: ComponentFixture<TestComponent>;
  let modalService: SkyModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule
      ]
    });

    modalService = TestBed.inject(SkyModalService);
  });

  // This is necessary as due to modals being launched outside of the test bed they will not
  // automatically be disposed between tests.
  afterEach(() => {
    fixture.componentInstance.closeModal();
    fixture.detectChanges();

    // NOTE: This is important as it ensures that the modal host component is fully disposed of
    // between tests. This is important as the modal host might need a different set of component
    // injectors than the previous test.
    modalService.dispose();
  });

  it('should retun the `ariaDescribedBy` property correctly', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.ariaDescribedBy = 'describingID';
    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    expect(modal.ariaDescribedBy).toBe('describingID');
  }));

  it('should retun the `ariaLabelledBy` property correctly', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.ariaLabelledBy = 'labellingID';
    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    expect(modal.ariaLabelledBy).toBe('labellingID');
  }));

  it('should retun the `ariaRole` property correctly', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.ariaRole = 'modalRole';
    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    expect(modal.ariaRole).toBe('modalRole');
  }));

  it('should retun the `fullPage` property correctly', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.fullPage = true;
    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    expect(modal.fullPage).toBeTruthy();
    expect(modal.size).toBeUndefined();
  }));

  it('should retun the `size` property correctly', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.size = 'small';
    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    expect(modal.fullPage).toBeFalse();
    expect(modal.size).toBe('small');
  }));

  it('should retun the `tiledBody` property correctly', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.tiledBody = true;
    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    expect(modal.tiledBody).toBeTrue();
  }));

  it('should close the modal when the close button click is triggered', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    modal.clickHeaderCloseButton();

    expect(document.querySelector('sky-modal[data-sky-id="test-modal"]')).toBeNull();
  }));

  it('should click the help button correctly when it is triggered', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.helpKey = 'test-key';
    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    spyOn(fixture.componentInstance, 'helpTriggered').and.callThrough();

    modal.clickHelpButton();

    expect(fixture.componentInstance.helpTriggered).toHaveBeenCalledWith('test-key');
  }));

  it('should select the correct element when calling `getModalEl`', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    const queriedElement = modal.getModalEl();
    expect(queriedElement).not.toBeNull();
    expect(queriedElement.tagName.toLowerCase()).toBe('div');
    expect(queriedElement.classList).toContain('sky-modal');
  }));

  it('should select the correct element when calling `getModalContentEl`', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    const queriedElement = modal.getModalContentEl();
    expect(queriedElement).not.toBeNull();
    expect(queriedElement.tagName.toLowerCase()).toBe('div');
    expect(queriedElement.classList).toContain('sky-modal-content');
  }));

  it('should select the correct element when calling `getModalHeaderEl`', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    const queriedElement = modal.getModalHeaderEl();
    expect(queriedElement).not.toBeNull();
    expect(queriedElement.tagName.toLowerCase()).toBe('div');
    expect(queriedElement.classList).toContain('sky-modal-header');
  }));

  it('should select the correct element when calling `getModalFooterEl`', fakeAsync(() => {
    fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    fixture.componentInstance.launchModal();

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const modal = new SkyModalFixture(
      fixture,
      'test-modal'
    );

    fixture.detectChanges();

    const queriedElement = modal.getModalFooterEl();
    expect(queriedElement).not.toBeNull();
    expect(queriedElement.tagName.toLowerCase()).toBe('div');
    expect(queriedElement.classList).toContain('sky-modal-footer');
  }));

});

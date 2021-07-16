import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SkyModalCloseArgs } from '../modules/modal/modal-close-args';
import { SkyModalInstance } from '../modules/modal/modal-instance';
import { SkyModalModule } from '../modules/modal/modal.module';
import { SkyModalService } from '../modules/modal/modal.service';
import { Component } from '@angular/core';
import { MockModalService } from './mock-modal-service';

@Component({
  selector: 'modal-test',
  template: `
<sky-modal>
  <sky-modal-header>
  </sky-modal-header>
  <sky-modal-content>
  </sky-modal-content>
  <sky-modal-footer>
  </sky-modal-footer>
</sky-modal>
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

  public lastClosingArgs: SkyModalCloseArgs;
  public lastHelpKey: string;
  private modalInstance: SkyModalInstance;

  constructor(private modalService: SkyModalService) {}

  public launchModal() {
    this.modalInstance = this.modalService.open(TestModalComponent, {});
    this.modalInstance.closed.subscribe((closingArgs: SkyModalCloseArgs) => {
      this.lastClosingArgs = closingArgs;
    });
    this.modalInstance.helpOpened.subscribe((helpKey: string) => {
      this.lastHelpKey = helpKey;
    });
  }
}

describe('Modal service callbacks', () => {
  let fixture: ComponentFixture<TestComponent>;
  let mockModalService: MockModalService;

  beforeEach(() => {
    mockModalService = new MockModalService();

    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        RouterTestingModule,
        SkyModalModule
      ],
      providers: [
        {
          provide: SkyModalService,
          useValue: mockModalService
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
  });

  it('can trigger the closed callback', fakeAsync(() => {
    let openSpy = spyOn(mockModalService, 'open').and.callThrough();
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.sky-btn').click();

    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();

    let expectedClosingData = {
      reason: 'save',
      data: {
        someKey: 'foo'
      }
    };
    mockModalService.closeCallback(expectedClosingData);

    expect(fixture.componentInstance.lastClosingArgs).toEqual(expectedClosingData);
  }));

  it('can trigger the helpOpened callback', fakeAsync(() => {
    let openSpy = spyOn(mockModalService, 'open').and.callThrough();
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.sky-btn').click();

    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();

    let helpKey: string = 'help has been opened';
    mockModalService.helpOpenCallback(helpKey);

    expect(fixture.componentInstance.lastHelpKey).toEqual(helpKey);
  }));
});

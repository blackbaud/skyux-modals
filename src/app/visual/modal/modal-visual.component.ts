import {
  Component
} from '@angular/core';

import {
  SkyThemeService,
  SkyThemeSettings
} from '@skyux/theme';

import {
  SkyModalConfigurationInterface,
  SkyModalInstance,
  SkyModalService
} from '../../public/public_api';

import {
  ModalDemoComponent
} from './modal-demo.component';

import {
  ModalLargeDemoComponent
} from './modal-large-demo.component';

import {
  ModalFullPageDemoComponent
} from './modal-fullpage-demo.component';

import {
  ModalContentDemoComponent
} from './modal-content-demo.component';

import {
  ModalTiledDemoComponent
} from './modal-tiled-demo.component';

import {
  ModalContentAutofocusComponent
} from './modal-content-autofocus.component';

import {
  ModalCloseConfirmComponent
} from './modal-close-confirm.component';

import {
  ModalFormDemoComponent
} from './modal-form-demo.component';

@Component({
  selector: 'modal-visual',
  templateUrl: './modal-visual.component.html',
  styleUrls: ['./modal-visual.component.scss']
})
export class ModalVisualComponent {

  public buttonsHidden: boolean;

  constructor(
    private modal: SkyModalService,
    private themeSvc: SkyThemeService
  ) { }

  public openModal() {
    this.openModalInstance(ModalDemoComponent, { 'providers': [] });
  }

  public openModalWithHelp() {
    this.openModalInstance(ModalDemoComponent, { 'providers': [], 'helpKey': 'demo-key.html' });
  }

  public openModalWithExtendedTitle() {
    const instance = this.openModalInstance(ModalDemoComponent, { 'providers': [], 'helpKey': 'demo-key.html' });
    instance.componentInstance.title = 'This is a modal title with an extended header text that must wrap by default';
  }

  public openLargeModal() {
    this.openModalInstance(ModalLargeDemoComponent, { 'providers': [] });
  }

  public openFullScreenModal() {
    this.openModalInstance(ModalFullPageDemoComponent, { 'providers': [], 'fullPage': true });
  }

  public openContentModal() {
    this.openModalInstance(ModalContentDemoComponent);
  }

  public openSmallSizeModal() {
    this.openModalInstance(
      ModalDemoComponent, { 'providers': [], 'fullPage': false , 'size': 'small'});
  }

  public openMediumSizeModal() {
    this.openModalInstance(
      ModalDemoComponent, { 'providers': [], 'fullPage': false , 'size': 'medium'});
  }

  public openLargeSizeModal() {
    this.openModalInstance(
      ModalDemoComponent, { 'providers': [], 'fullPage': false , 'size': 'large'});
  }

  public openTiledModal() {
    this.openModalInstance(ModalTiledDemoComponent, { 'providers': [] });
  }

  public openAutofocusModal() {
    this.openModalInstance(
      ModalContentAutofocusComponent, { 'providers': [], 'fullPage': false , 'size': 'large'});
  }

  public openCloseConfirmationModal() {
    this.openModalInstance(
      ModalCloseConfirmComponent, { 'providers': [], 'fullPage': false , 'size': 'large'});
  }

  public openFormModal() {
    this.openModalInstance(ModalFormDemoComponent);
  }

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSvc.setTheme(themeSettings);
  }

  public hideButtons(): void {
    this.buttonsHidden = true;
  }

  public showButtons(): void {
    this.buttonsHidden = false;
  }

  private openModalInstance(
    modalType: any,
    options?: SkyModalConfigurationInterface
  ): SkyModalInstance {
    this.hideButtons();

    const instance = this.modal.open(
      modalType,
      options
    );

    instance.closed.subscribe(() => {
      this.showButtons();
    });

    return instance;
  }
}

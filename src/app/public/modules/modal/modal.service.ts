import {
  ComponentRef,
  Injectable
} from '@angular/core';

import {
  SkyDynamicComponentService
} from '@skyux/core';

import {
  SkyModalInstance
} from './modal-instance';

import {
  SkyModalHostComponent
} from './modal-host.component';

import {
  SkyModalConfigurationInterface
} from './modal.interface';

/**
 * A service that lauches modals.
 * @dynamic
 */
@Injectable()
export class SkyModalService {

  private static host: ComponentRef<SkyModalHostComponent>;

  // TODO: In future breaking change - remove extra parameters as they are no longer used.
  /* tslint:disable:no-unused-variable */
  constructor(
    private dynamicComponentService?: SkyDynamicComponentService
  ) { }

  /**
   * @private
   * Removes the modal host from the DOM.
   */
  public dispose(): void {
    if (SkyModalService.host) {
      this.dynamicComponentService.removeComponent(SkyModalService.host);
      SkyModalService.host = undefined;
    }
  }

  /**
   * Opens a modal using the specified component.
   * @param component Determines the component to render.
   * Since you generate the component dynamically instead of with HTML selectors,
   * you must register it with the `entryComponents` property in the `app-extras.module.ts` file.
   * For more information, see the
   * [entry components tutorial](https://developer.blackbaud.com/skyux/learn/get-started/advanced/entry-components).
   * @param config Populates the modal based on the `SkyModalConfigurationInterface` object.
   */
  public open(component: any, config?: SkyModalConfigurationInterface): SkyModalInstance;

  public open(component: any, providers?: any[]): SkyModalInstance;

  // TODO: skyux-docs-tools doesn't know how to interpret overloads yet.
  // As a result, some of these parameters will still show up in the docs, until this work is done:
  // https://github.com/blackbaud/skyux-docs-tools/issues/66
  public open(): SkyModalInstance {
    let modalInstance = new SkyModalInstance();
    this.createHostComponent();
    let providersOrConfig: SkyModalConfigurationInterface = arguments[1];
    let params = this.getConfigFromParameter(providersOrConfig);
    let component = arguments[0];

    params.providers.push({
      provide: SkyModalInstance,
      useValue: modalInstance
    });

    SkyModalService.host.instance.open(modalInstance, component, params);

    return modalInstance;
  }

  private getConfigFromParameter(providersOrConfig: any): any {
    let defaultParams: SkyModalConfigurationInterface = {
      'providers': [],
      'fullPage': false,
      'size': 'medium',
      'tiledBody': false
    };
    let params: any = undefined;
    let method: any = undefined;

    // Object Literal Lookup for backwards compatability.
    method = {
      'providers?': Object.assign({}, defaultParams, { 'providers': providersOrConfig }),
      'config': Object.assign({}, defaultParams, providersOrConfig)
    };

    if (Array.isArray(providersOrConfig) === true) {
      params = method['providers?'];
    } else {
      params = method['config'];
    }

    return params;
  }

  private createHostComponent(): void {
    if (!SkyModalService.host) {
      SkyModalService.host = this.dynamicComponentService.createComponent(SkyModalHostComponent);
    }
  }
}

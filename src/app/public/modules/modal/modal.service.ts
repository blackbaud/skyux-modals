import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Optional
} from '@angular/core';

import {
  SkyModalInstance
} from './modal-instance';

import {
  SkyModalHostComponent
} from './modal-host.component';

import {
  SkyModalAdapterService
} from './modal-adapter.service';

import {
  SkyModalConfigurationInterface as IConfig
} from './modal.interface';

@Injectable()
export class SkyModalService {
  private static host: ComponentRef<SkyModalHostComponent>;

  // NOTE: In future breaking change - remove optional from Injector paramater. Currently there to
  // avoid a breaking change
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private adapter: SkyModalAdapterService,
    @Optional() private injector?: Injector
  ) { }

  // Open Overloads
  public open(component: any, providers?: any[]): SkyModalInstance;
  public open(component: any, config?: IConfig): SkyModalInstance;

  // Open Method
  public open(): SkyModalInstance {
    let modalInstance = new SkyModalInstance();
    this.createHostComponent();
    let providersOrConfig: IConfig = arguments[1];
    let params = this.getConfigFromParameter(providersOrConfig);
    let component = arguments[0];

    params.providers.push({
      provide: SkyModalInstance,
      useValue: modalInstance
    });

    SkyModalService.host.instance.open(modalInstance, component, params);

    return modalInstance;
  }

  public dispose() {
    if (SkyModalService.host) {
      // Trigger the host component's OnDestroy method:
      this.appRef.detachView(SkyModalService.host.hostView);
      SkyModalService.host.destroy();
      SkyModalService.host = undefined;
    }

    this.adapter.removeHostEl();
  }

  private getConfigFromParameter(providersOrConfig: any) {
    let defaultParams: IConfig = {
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

  private createHostComponent() {
    if (!SkyModalService.host) {
      const componentRef = this.resolver
        .resolveComponentFactory(SkyModalHostComponent)
        .create(this.injector);

      const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];

      this.appRef.attachView(componentRef.hostView);
      this.adapter.setHostDomElem(domElem);
      this.adapter.addHostEl();

      SkyModalService.host = componentRef;
    }
  }
}

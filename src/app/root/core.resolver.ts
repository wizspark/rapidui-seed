import { AdminConfig } from '@wize/quiver-admin';
import { Injectable } from '@angular/core';
import { CoreHttpService } from './core.http.service';
import { environment } from '../environment';

@Injectable()
export class CustomAdminConfig {
  constructor(protected http: CoreHttpService) {
  }

  getHost() {
    return environment.host;
  }

  getHttp() {
    return this.http;
  }

  selectedModules: string[] = ['roles', 'users', 'organizations', 'templates', 'rules'];
}

// an array of services to resolve routes with data
export const APP_PROVIDERS = [
  CustomAdminConfig,
  {provide: AdminConfig, useExisting: CustomAdminConfig}
];

import { AdminConfig } from '@wize/quiver-admin';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Http } from '@angular/http';

@Injectable()
export class CustomAdminConfig {
  constructor(protected http: Http) {
  }

  getHost() {
    return environment.host;
  }

  getHttp() {
    return this.http;
  }
}

// an array of services to resolve routes with data
export const APP_PROVIDERS = [
  CustomAdminConfig,
  {provide: AdminConfig, useExisting: CustomAdminConfig}
];

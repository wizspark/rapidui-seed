import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { WizeCoreHttpHandler } from './interfaces';

@Injectable()
export class CoreHttpService extends Http {
  private httpHandler: WizeCoreHttpHandler = null;

  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }

  setHandler(handler: WizeCoreHttpHandler) {
    this.httpHandler = handler;
  }

  get(url: string, options?: RequestOptionsArgs, spinner?: boolean): Observable<Response> {
    return super.get(url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs, spinner?: boolean): Observable<Response> {
    return super.post(url, body, options);
  }

  put(url: string, body: any, options?: RequestOptionsArgs, spinner?: boolean): Observable<Response> {
    return super.put(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs, spinner?: boolean): Observable<Response> {
    return super.delete(url, options);
  }

  patch(url: string, body: any, options?: RequestOptionsArgs, spinner?: boolean): Observable<Response> {
    return super.patch(url, body, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

    if (this.httpHandler) {
      this.httpHandler.configureRequest(url, options);
    }
    if (typeof url !== 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // we have to add the token to the url object
        url.headers.set('Accept', 'application/json');
        url.headers.set('Content-Type', 'application/json');
      }
    }
    return super.request(url, options).catch(this.catchError(this));
  }

  catchError(self: CoreHttpService) {
    return this.catchHttpError(self);
  }

  catchHttpError(self: CoreHttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      return Observable.throw(res);
    };
  }
}

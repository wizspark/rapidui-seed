import {
  Request,
  RequestOptionsArgs
} from '@angular/http';

export abstract class WizeCoreHttpHandler {
  abstract handleError(service: any);

  abstract configureRequest(url: string | Request, options?: RequestOptionsArgs);
}

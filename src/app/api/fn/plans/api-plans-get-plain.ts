/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlanDto } from '../../models/plan-dto';

export interface ApiPlansGet$Plain$Params {
}

export function apiPlansGet$Plain(http: HttpClient, rootUrl: string, params?: ApiPlansGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PlanDto>>> {
  const rb = new RequestBuilder(rootUrl, apiPlansGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PlanDto>>;
    })
  );
}

apiPlansGet$Plain.PATH = '/api/Plans';

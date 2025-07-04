/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MrrDto } from '../../models/mrr-dto';

export interface ApiReportsMrrGet$Json$Params {
}

export function apiReportsMrrGet$Json(http: HttpClient, rootUrl: string, params?: ApiReportsMrrGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<MrrDto>> {
  const rb = new RequestBuilder(rootUrl, apiReportsMrrGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MrrDto>;
    })
  );
}

apiReportsMrrGet$Json.PATH = '/api/Reports/mrr';

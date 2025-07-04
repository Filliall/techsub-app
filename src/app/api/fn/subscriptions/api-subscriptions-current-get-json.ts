/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SubscriptionDetailsDto } from '../../models/subscription-details-dto';

export interface ApiSubscriptionsCurrentGet$Json$Params {
}

export function apiSubscriptionsCurrentGet$Json(http: HttpClient, rootUrl: string, params?: ApiSubscriptionsCurrentGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SubscriptionDetailsDto>> {
  const rb = new RequestBuilder(rootUrl, apiSubscriptionsCurrentGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SubscriptionDetailsDto>;
    })
  );
}

apiSubscriptionsCurrentGet$Json.PATH = '/api/Subscriptions/current';

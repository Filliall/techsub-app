import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

import {
  SubscriptionDetailsDto,
  SubscriptionStatus,
} from '../../../api/models';
import { SubscriptionsService } from '../../../api/services';

@Component({
  selector: 'app-my-subscription',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatProgressSpinnerModule,
  ],
  templateUrl: './my-subscription.component.html',
  styleUrls: ['./my-subscription.component.scss'],
})
export class MySubscriptionComponent implements OnInit {
  subscription$!: Observable<
    (SubscriptionDetailsDto & { statusName?: string }) | null
  >;

  constructor(private subscriptionService: SubscriptionsService) {}

  ngOnInit(): void {
    // Assumindo que a API tem um endpoint para buscar a assinatura do usuário logado
    this.subscription$ = this.subscriptionService
      .apiSubscriptionsCurrentGet$Json()
      .pipe(
        map((sub) => {
          if (!sub) {
            return null;
          }
          return {
            ...sub,
            statusName:
              sub.status !== undefined
                ? SubscriptionStatus[sub.status]
                : undefined,
          };
        })
      );
  }
}

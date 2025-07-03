import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SubscriptionDetailsDto } from '../../../api/models';
import { SubscriptionsService } from '../../../api/services';

@Component({
  selector: 'app-my-subscription',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './my-subscription.component.html',
  styleUrls: ['./my-subscription.component.scss'],
})
export class MySubscriptionComponent implements OnInit {
  subscription$!: Observable<SubscriptionDetailsDto>;

  constructor(private subscriptionService: SubscriptionsService) {}

  ngOnInit(): void {
    // Assumindo que a API tem um endpoint para buscar a assinatura do usuário logado
    this.subscription$ =
      this.subscriptionService.apiSubscriptionsCurrentGet$Json();
  }
}

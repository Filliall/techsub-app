import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Subscription } from 'src/app/api/models';
import { SubscriptionService } from 'src/app/api/services';

@Component({
  selector: 'app-my-subscription',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './my-subscription.component.html',
  styleUrls: ['./my-subscription.component.scss'],
})
export class MySubscriptionComponent implements OnInit {
  subscription$: Observable<Subscription>;

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    // Assumindo que a API tem um endpoint para buscar a assinatura do usuário logado
    this.subscription$ =
      this.subscriptionService.apiSubscriptionMySubscriptionGet$Json();
  }
}

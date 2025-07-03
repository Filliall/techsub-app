import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { PlanDto, SubscriptionDetailsDto } from '../../../api/models';
import { SubscriptionsService } from '../../../api/services';

@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
})
export class PlanListComponent implements OnInit {
  plans$!: Observable<PlanDto[] | SubscriptionDetailsDto>;

  constructor(private subscriptionPlanService: SubscriptionsService) {}

  ngOnInit(): void {
    this.plans$ =
      this.subscriptionPlanService.apiSubscriptionsCurrentGet$Json();
  }
}

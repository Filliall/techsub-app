import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PlanDto } from '../../../api/models';
import { SubscriptionsService } from '../../../api/services';

@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
})
export class PlanListComponent implements OnInit {
  plans$: Observable<PlanDto[]> | undefined;

  constructor(private planService: SubscriptionsService) {}

  ngOnInit(): void {
    this.plans$ =
      this.planService.apiSubscriptionsCurrentGet$Json() as Observable<
        PlanDto[]
      >;
  }
}

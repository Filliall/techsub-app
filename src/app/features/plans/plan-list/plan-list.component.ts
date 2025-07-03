import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Observable, finalize } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { PlanDto } from '../../../api/models';
import { PlansService, SubscriptionsService } from '../../../api/services';

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
    CurrencyPipe,
  ],
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
})
export class PlanListComponent implements OnInit {
  plans$!: Observable<PlanDto[]>;
  loadingPlanId: string | null = null;

  constructor(
    private plansService: PlansService,
    private subscriptionsService: SubscriptionsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.plans$ = this.plansService.apiPlansGet$Json();
  }

  subscribeToPlan(planId: string): void {
    if (this.loadingPlanId) return;

    this.loadingPlanId = planId;

    this.subscriptionsService
      .apiSubscriptionsPost({
        body: { planId: Number(planId) },
      })
      .pipe(finalize(() => (this.loadingPlanId = null)))
      .subscribe({
        next: () => {
          this.snackBar.open('Inscrição realizada com sucesso!', 'Fechar');
          this.router.navigate(['/my-subscription']);
        },
        error: (err) => {
          this.snackBar.open(
            'Falha ao realizar a inscrição. Tente novamente.',
            'Fechar'
          );
        },
      });
  }
}

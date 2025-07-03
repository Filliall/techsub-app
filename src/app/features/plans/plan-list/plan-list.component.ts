import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Observable, finalize } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpHeaders } from '@angular/common/http'; // Import HttpHeaders

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { PlanDto } from '../../../api/models';
import { PlansService, SubscriptionsService } from '../../../api/services';
import { AuthService } from '../../../core/auth/auth.service'; // Import AuthService

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
    private snackBar: MatSnackBar,
    private authService: AuthService // Inject AuthService
  ) {}

  ngOnInit(): void {
    this.plans$ = this.plansService.apiPlansGet$Json();
  }

  subscribeToPlan(planId: number): void {
    if (this.loadingPlanId) return;

    this.loadingPlanId = planId.toString();

    // Get the authentication token
    const authToken = this.authService.getToken(); // Assuming getToken() method exists in AuthService

    // Log the token to the console
    console.log('Authentication Token:', authToken);

    // Create HttpHeaders with the Authorization header
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);

    this.subscriptionsService
      .apiSubscriptionsPost({ body: { planId }, context: { headers } as any }) // Pass headers in context
      .pipe(finalize(() => (this.loadingPlanId = null)))
      .subscribe({
        next: () => {
          this.snackBar.open('Inscrição realizada com sucesso!', 'Fechar', {
            duration: 5000,
          });
          this.router.navigate(['/my-subscription']);
        },
        error: (err) => {
          this.snackBar.open(
            'Falha ao realizar a inscrição. Tente novamente.',
            'Fechar'
          );
          console.error(err); // Log the error for debugging
        },
      });
  }
}

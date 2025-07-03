import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Observable, of } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { ReportsService } from '../../../api/services'; // Será usado no futuro

interface ReportMetric {
  title: string;
  value: number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-reports-list',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  mrr$!: Observable<ReportMetric>;

  // constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    // Exemplo: No futuro, você chamaria seu serviço de API aqui.
    // this.mrr$ = this.reportsService.apiReportsMmrGet$Json();
    this.mrr$ = of({
      title: 'Receita Recorrente Mensal (MRR)',
      value: 12540.5, // Valor de exemplo
      icon: 'monetization_on',
      color: 'primary',
    });
  }
}

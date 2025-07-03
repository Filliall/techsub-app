import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

import { PlanListComponent } from './plan-list.component';
import { PlansService, SubscriptionsService } from '../../../api/services';
import { PlanDto } from '../../../api/models';

describe('PlanListComponent', () => {
  let component: PlanListComponent;
  let fixture: ComponentFixture<PlanListComponent>;
  let plansServiceMock: Partial<PlansService>;
  let subscriptionsServiceMock: Partial<SubscriptionsService>;
  beforeEach(async () => {
    plansServiceMock = {
      apiPlansGet$Json: () => of<PlanDto[]>([]),
    };
    subscriptionsServiceMock = {
      apiSubscriptionsPost: () => of(undefined),
    };
    await TestBed.configureTestingModule({
      imports: [
        PlanListComponent,
        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: PlansService,
          useValue: plansServiceMock,
        },
        {
          provide: SubscriptionsService,
          useValue: subscriptionsServiceMock,
        },
        { provide: MatSnackBar, useValue: { open: () => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

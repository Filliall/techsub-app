import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PlanListComponent } from './plan-list.component';
import { SubscriptionsService } from '../../../api/services';

describe('PlanListComponent', () => {
  let component: PlanListComponent;
  let fixture: ComponentFixture<PlanListComponent>;
  let subscriptionPlanServiceMock: Partial<SubscriptionsService>;

  beforeEach(async () => {
    subscriptionPlanServiceMock = {
      apiSubscriptionsCurrentGet$Json: () => of([]),
    };

    await TestBed.configureTestingModule({
      imports: [PlanListComponent, HttpClientTestingModule],
      providers: [
        {
          provide: subscriptionPlanServiceMock,
          useValue: subscriptionPlanServiceMock,
        },
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

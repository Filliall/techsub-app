import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PlanListComponent } from './plan-list.component';
import { PlansService } from '../../../api/services';
import { PlanDto } from '../../../api/models';

describe('PlanListComponent', () => {
  let component: PlanListComponent;
  let fixture: ComponentFixture<PlanListComponent>;
  let plansServiceMock: Partial<PlansService>;

  beforeEach(async () => {
    plansServiceMock = {
      apiPlansGet$Json: () => of<PlanDto[]>([]), // Simulate the API call returning an empty array of plans
    };

    // It's good practice to mock the actual service used by the component.
    // The PlanListComponent uses PlansService, not SubscriptionsService.
    // Also, ensure the mock return type matches the service's method signature.

    await TestBed.configureTestingModule({
      imports: [PlanListComponent, HttpClientTestingModule],
      providers: [
        {
          provide: PlansService, // Provide the actual PlansService
          useValue: plansServiceMock, // Use the mock implementation
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

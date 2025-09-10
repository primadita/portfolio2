import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectOverviewComponent } from './single-project-overview.component';

describe('SingleProjectOverviewComponent', () => {
  let component: SingleProjectOverviewComponent;
  let fixture: ComponentFixture<SingleProjectOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

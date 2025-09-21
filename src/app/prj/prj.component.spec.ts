import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjComponent } from './prj.component';

describe('PrjComponent', () => {
  let component: PrjComponent;
  let fixture: ComponentFixture<PrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

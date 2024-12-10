import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifydashboardComponent } from './spotifydashboard.component';

describe('SpotifydashboardComponent', () => {
  let component: SpotifydashboardComponent;
  let fixture: ComponentFixture<SpotifydashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifydashboardComponent]
    });
    fixture = TestBed.createComponent(SpotifydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

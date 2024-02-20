import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentControlComponent } from './incident-control.component';

describe('IncidentControlComponent', () => {
  let component: IncidentControlComponent;
  let fixture: ComponentFixture<IncidentControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

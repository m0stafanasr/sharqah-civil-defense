import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTakersComponent } from './call-takers.component';

describe('CallTakersComponent', () => {
  let component: CallTakersComponent;
  let fixture: ComponentFixture<CallTakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallTakersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallTakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

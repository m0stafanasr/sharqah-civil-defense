import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchersListComponent } from './dispatchers-list.component';

describe('DispatchersListComponent', () => {
  let component: DispatchersListComponent;
  let fixture: ComponentFixture<DispatchersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispatchersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispatchersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSlot } from './calendar-slot';

describe('CalendarSlot', () => {
  let component: CalendarSlot;
  let fixture: ComponentFixture<CalendarSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarSlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarSlot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

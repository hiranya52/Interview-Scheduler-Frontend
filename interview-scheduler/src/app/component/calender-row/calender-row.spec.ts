import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderRow } from './calender-row';

describe('CalenderRow', () => {
  let component: CalenderRow;
  let fixture: ComponentFixture<CalenderRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

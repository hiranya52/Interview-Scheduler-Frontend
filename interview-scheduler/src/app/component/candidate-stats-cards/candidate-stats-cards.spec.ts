import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateStatsCards } from './candidate-stats-cards';

describe('CandidateStatsCards', () => {
  let component: CandidateStatsCards;
  let fixture: ComponentFixture<CandidateStatsCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateStatsCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateStatsCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

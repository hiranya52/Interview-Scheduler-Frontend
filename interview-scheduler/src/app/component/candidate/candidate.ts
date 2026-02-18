import { Component } from '@angular/core';
import { Header } from "../header/header";
import { CandidateHeader } from "../candidate-header/candidate-header";
import { CandidateStatsCards } from "../candidate-stats-cards/candidate-stats-cards";

@Component({
  selector: 'app-candidate',
  imports: [CandidateHeader, CandidateStatsCards],
  templateUrl: './candidate.html',
  styleUrl: './candidate.css',
})
export class Candidate {

}

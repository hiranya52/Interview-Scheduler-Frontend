import { Component } from '@angular/core';
import { Header } from "../header/header";
import { CandidateHeader } from "../candidate-header/candidate-header";
import { CandidateStatsCards } from "../candidate-stats-cards/candidate-stats-cards";
import { CandidatesTable } from "../candidates-table/candidates-table";

@Component({
  selector: 'app-candidate',
  imports: [CandidateHeader, CandidateStatsCards, CandidatesTable],
  templateUrl: './candidate.html',
  styleUrl: './candidate.css',
})
export class Candidate {

}

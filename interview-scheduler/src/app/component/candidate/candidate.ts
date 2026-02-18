import { Component } from '@angular/core';
import { Header } from "../header/header";
import { CandidateHeader } from "../candidate-header/candidate-header";

@Component({
  selector: 'app-candidate',
  imports: [Header, CandidateHeader],
  templateUrl: './candidate.html',
  styleUrl: './candidate.css',
})
export class Candidate {

}

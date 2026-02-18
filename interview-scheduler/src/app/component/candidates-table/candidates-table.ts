import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Candidate {
  initials: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  cvStatus: 'Uploaded' | 'Under Review' | 'Missing' | 'Reviewed';
  color: string;
}

@Component({
  selector: 'app-candidates-table',
  imports: [CommonModule],
  templateUrl: './candidates-table.html',
  styleUrl: './candidates-table.css',
})
export class CandidatesTable {

  candidates: Candidate[] = [
    { initials: 'JD', name: 'John Doe', role: 'Senior Fullstack Developer', email: 'john.doe@techsphere.com', phone: '+1 (555) 012-3456', cvStatus: 'Uploaded', color: 'emerald' },
    { initials: 'JS', name: 'Jane Smith', role: 'UI/UX Designer', email: 'j.smith@designflow.io', phone: '+1 (555) 987-6543', cvStatus: 'Under Review', color: 'blue' },
    { initials: 'RB', name: 'Robert Brown', role: 'Data Scientist', email: 'rbrown.dev@provider.net', phone: '+1 (555) 333-2211', cvStatus: 'Missing', color: 'red' },
    { initials: 'AW', name: 'Alice White', role: 'Product Manager', email: 'a.white@techcorp.com', phone: '+1 (555) 777-8899', cvStatus: 'Reviewed', color: 'slate' },
  ];

}

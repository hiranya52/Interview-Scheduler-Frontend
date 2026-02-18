import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  imports: [CommonModule],
  templateUrl: './calender.html',
  styleUrl: './calender.css',
})
export class Calender {
  days = [
    { label: 'MON', date: 23 },
    { label: 'TUE', date: 24, highlight: true },
    { label: 'WED', date: 25 },
    { label: 'THU', date: 26 },
    { label: 'FRI', date: 27 },
  ];

  times = ['09:00 AM', '10:00 AM', '11:00 AM'];
}

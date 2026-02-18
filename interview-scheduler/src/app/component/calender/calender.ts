import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalenderRow } from "../calender-row/calender-row";

@Component({
  selector: 'app-calender',
  imports: [CommonModule, CalenderRow],
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

  calendarRows = [
    {
      time: '09:00 AM',
      days: [
        { slotType: 'available' },
        {
          slotType: 'booked',
          booking: {
            title: 'UX Interview',
            candidate: 'Sarah Jenkins',
            interviewer: 'Marcus Kulas'
          }
        },
        { slotType: 'available' },
        { slotType: 'conflict' },
        {
          slotType: 'booked',
          booking: {
            title: 'Tech Interview',
            candidate: 'Michael Ross',
            interviewer: 'Leo Roberts'
          }
        }
      ]
    },

    {
      time: '10:00 AM',
      days: [
        { slotType: 'available' },
        {
          slotType: 'booked',
          booking: {
            title: 'Code Review',
            candidate: 'Anna Watson',
            interviewer: 'Jane Doe'
          }
        },
        { slotType: 'conflict' },
        { slotType: 'available' },
        { slotType: 'available' }
      ]
    },

    {
      time: '11:00 AM',
      days: [
        { slotType: 'available' },
        { slotType: 'available' },
        {
          slotType: 'booked',
          booking: {
            title: 'Design Discussion',
            candidate: 'Tom Lee',
            interviewer: 'Emily Clark'
          }
        },
        { slotType: 'available' },
        { slotType: 'conflict' }
      ]
    }
  ];

}

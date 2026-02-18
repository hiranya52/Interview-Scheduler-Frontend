import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-slot',
  imports: [CommonModule],
  templateUrl: './calendar-slot.html',
  styleUrl: './calendar-slot.css',
})
export class CalendarSlot {

  @Input() day!: any;
  @Input() time!: string;

  slotType = 'available'; // can be 'available', 'booked', 'conflict'

  booking = {
    title: 'UX Interview',
    candidate: 'Sarah Jenkins',
    interviewer: 'Marcus K.',
    color: 'primary'
  };

}

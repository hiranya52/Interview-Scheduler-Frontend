import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-slot',
  imports: [CommonModule],
  templateUrl: './calendar-slot.html',
  styleUrl: './calendar-slot.css',
})
export class CalendarSlot {

  @Input() slotType!: 'available' | 'booked' | 'conflict';
  @Input() booking: any;

}

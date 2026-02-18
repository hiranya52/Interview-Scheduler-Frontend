import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookingModalComponent } from '../booking-modal/booking-modal';

@Component({
  selector: 'app-calendar-slot',
  imports: [CommonModule],
  templateUrl: './calendar-slot.html',
  styleUrl: './calendar-slot.css',
})
export class CalendarSlot{

   @Input() booking?: { title: string; candidate: string; interviewer: string } | null;
   @Input() slotType!: 'AVAILABLE' | 'BOOKED' | 'CONFLICT';

}

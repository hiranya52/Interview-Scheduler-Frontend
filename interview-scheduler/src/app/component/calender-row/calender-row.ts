import { Component, Input } from '@angular/core';
import { CalendarSlot } from "../calendar-slot/calendar-slot";

@Component({
  selector: 'app-calender-row',
  imports: [CalendarSlot],
  templateUrl: './calender-row.html',
  styleUrl: './calender-row.css',
})
export class CalenderRow {

  @Input() time!: string;
  @Input() days!: any[];

}

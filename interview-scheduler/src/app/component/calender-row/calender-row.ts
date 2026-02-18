import { Component, Input } from '@angular/core';
import { CalendarSlot } from "../calendar-slot/calendar-slot";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calender-row',
  imports: [CommonModule,CalendarSlot],
  templateUrl: './calender-row.html',
  styleUrl: './calender-row.css',
})
export class CalenderRow {


@Input() time!: string;
@Input() days!: any[];

}

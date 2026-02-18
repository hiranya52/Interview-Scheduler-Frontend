import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calender-row',
  imports: [],
  templateUrl: './calender-row.html',
  styleUrl: './calender-row.css',
})
export class CalenderRow {

  @Input() time!: string;
  @Input() days!: any[];

}

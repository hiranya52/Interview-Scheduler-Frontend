import { SlotsModel } from './../../service/slots/slots-model';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CalenderRow } from "../calender-row/calender-row";
import { log } from 'console';

@Component({
  selector: 'app-calender',
  imports: [CommonModule, CalenderRow],
  templateUrl: './calender.html',
  styleUrl: './calender.css',
})

export class Calender implements OnInit{

  private SlotsModel = inject(SlotsModel);

  days = [
    { label: 'MON', date: 23 },
    { label: 'TUE', date: 24, highlight: true },
    { label: 'WED', date: 25 },
    { label: 'THU', date: 26 },
    { label: 'FRI', date: 27 },
  ];

  private slotsModel = inject(SlotsModel);

  SlotsList: any[] = [];

  ngOnInit(): void {
    this.slotsModel.getAllSlots().subscribe((response: any) => {
      this.SlotsList = response;
    });
  }

}

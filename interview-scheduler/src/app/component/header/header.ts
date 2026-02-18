import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModelService } from '../../service/booking-model/booking-model-service';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private modalService: BookingModelService) {}

  openModal() {
    this.modalService.open();
  }

}

import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Filters } from "../filters/filters";
import { Calender } from "../calender/calender";
import { BookingModalComponent } from "../booking-modal/booking-modal";

@Component({
  selector: 'app-booking',
  imports: [Header, Filters, Calender, BookingModalComponent],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {

}

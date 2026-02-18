import { Component } from '@angular/core';
import { SideBar } from "../../component/side-bar/side-bar";
import { Header } from "../../component/header/header";
import { Filters } from "../../component/filters/filters";
import { Calender } from "../../component/calender/calender";
import { BookingModalComponent } from '../../component/booking-modal/booking-modal';


@Component({
  selector: 'app-home',
  imports: [SideBar, Header, Filters, Calender, BookingModalComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

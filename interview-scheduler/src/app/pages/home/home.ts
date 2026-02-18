import { Component } from '@angular/core';
import { Booking } from "../../component/booking/booking";
import { SideBar } from "../../component/side-bar/side-bar";
import { CommonModule } from '@angular/common';
import { ViewService } from '../../view/view-service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [Booking, SideBar,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public currentView$: Observable<string>;

  constructor(private viewService: ViewService) {
    this.currentView$ = this.viewService.currentView$;
  }


}

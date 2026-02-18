import { Component } from '@angular/core';
import { ViewService } from '../../view/view-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {

  constructor(private viewService: ViewService) {}

  setView(view: string) {
    this.viewService.changeView(view);
  }

}

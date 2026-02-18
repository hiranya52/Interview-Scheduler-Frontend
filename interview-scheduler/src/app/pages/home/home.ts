import { Component } from '@angular/core';
import { SideBar } from "../../component/side-bar/side-bar";
import { Header } from "../../component/header/header";
import { Filters } from "../../component/filters/filters";

@Component({
  selector: 'app-home',
  imports: [SideBar, Header, Filters],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

import { Component } from '@angular/core';
import { SideBar } from "../../component/side-bar/side-bar";
import { Header } from "../../component/header/header";

@Component({
  selector: 'app-home',
  imports: [SideBar, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

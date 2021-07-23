import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbars: Navbar[] =[
    new Navbar("Dashboard", "/dashboard"),
    new Navbar("User", "/user/list"),
    new Navbar("Carrier", "/carrier/list"),
    new Navbar("Customer", "/customer/list"),
    new Navbar("Shed", "/shed/list"),
    new Navbar("Load", "/load/list"),
  ]



  constructor() { }

  ngOnInit(): void {
  }

}

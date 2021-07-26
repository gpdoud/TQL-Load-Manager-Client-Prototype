import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card-lc',
  templateUrl: './mini-card-lc.component.html',
  styleUrls: ['./mini-card-lc.component.css']
})
export class MiniCardLcComponent implements OnInit {

  title: string = "Load Count";
  value: number = 24;
  color: string = "green";
  isIncrease: boolean = true;
  isCurrency: boolean = false;
  duration: string = "Week Over Week";
  percentValue: number = 0.0909;

  constructor() { }

  ngOnInit(): void {
  }

}

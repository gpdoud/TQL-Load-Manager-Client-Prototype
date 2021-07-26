import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card-calls',
  templateUrl: './mini-card-calls.component.html',
  styleUrls: ['./mini-card-calls.component.css']
})
export class MiniCardCallsComponent implements OnInit {

  title: string = "Prospecting Calls";
  value: number = 212;
  color: string = "red";
  isIncrease: boolean = false;
  isCurrency: boolean = false;
  duration: string = "Week Over Week";
  percentValue: number = 0.0236;


  constructor() { }

  ngOnInit(): void {
  }

}

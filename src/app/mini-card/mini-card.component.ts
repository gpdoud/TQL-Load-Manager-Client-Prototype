import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {

  title: string = "Weekly BR";
  value: number = 4879.22;
  color: string = "green";
  isIncrease: boolean = true;
  isCurrency: boolean = true;
  duration: string = "Week Over Week";
  percentValue: number = 0.152;

  constructor() { }

  ngOnInit(): void {
  }

}
